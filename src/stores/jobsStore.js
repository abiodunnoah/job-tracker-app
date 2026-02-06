import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { db, auth } from "../firebase/config";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref([]);
  const filterStatus = ref("all");
  const searchQuery = ref("");
  const isLoading = ref(false);
  const error = ref(null);
  let unsubscribeArgs = null;

  // Initialize store logic
  const init = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchJobs(user.uid);
      } else {
        jobs.value = [];
        if (unsubscribeArgs) {
          unsubscribeArgs();
          unsubscribeArgs = null;
        }
      }
    });
  };

  const fetchJobs = (userId) => {
    isLoading.value = true;
    const q = query(
      collection(db, "users", userId, "jobs"),
      orderBy("createdAt", "desc"),
    );

    unsubscribeArgs = onSnapshot(
      q,
      (snapshot) => {
        jobs.value = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        isLoading.value = false;
        error.value = null;
      },
      (err) => {
        console.error("Error fetching jobs:", err);
        error.value = "Failed to load jobs";
        isLoading.value = false;
      },
    );
  };

  const addJob = async (job) => {
    if (!auth.currentUser) return;
    error.value = null;

    try {
      await addDoc(collection(db, "users", auth.currentUser.uid, "jobs"), {
        ...job,
        createdAt: serverTimestamp(),
        messages: [], // Initialize empty messages
      });
    } catch (err) {
      console.error("Error adding job:", err);
      error.value = "Failed to add job";
    }
  };

  const deleteJob = async (id) => {
    if (!auth.currentUser) return;

    try {
      await deleteDoc(doc(db, "users", auth.currentUser.uid, "jobs", id));
    } catch (err) {
      console.error("Error deleting job:", err);
      error.value = "Failed to delete job";
    }
  };

  const filteredJobs = computed(() => {
    return jobs.value.filter((job) => {
      const matchesStatus =
        filterStatus.value === "all" || job.status === filterStatus.value;
      const matchesSearch =
        searchQuery.value === "" ||
        job.company.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        job.role.toLowerCase().includes(searchQuery.value.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  });

  const recentJobs = computed(() => {
    return jobs.value.slice(0, 4);
  });

  const stats = computed(() => {
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const endOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 6));

    const interviewsThisWeek = jobs.value.filter((job) => {
      if (job.status !== "interview" || !job.interviewDate) return false;
      const interviewDate = new Date(job.interviewDate);
      return interviewDate >= startOfWeek && interviewDate <= endOfWeek;
    }).length;

    const unreadMessages = jobs.value.reduce((count, job) => {
      return (
        count +
        (job.messages ? job.messages.filter((m) => !m.isRead).length : 0)
      );
    }, 0);

    return {
      unreadMessages,
      interviewsThisWeek,
      totalApplications: jobs.value.length,
      offers: jobs.value.filter((j) => j.status === "offer").length,
    };
  });

  const setFilter = (status, search) => {
    filterStatus.value = status;
    searchQuery.value = search;
  };

  // Start listening
  init();

  return {
    jobs,
    filteredJobs,
    recentJobs,
    stats,
    filterStatus,
    searchQuery,
    isLoading,
    error,
    setFilter,
    addJob,
    deleteJob,
  };
});
