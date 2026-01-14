import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref([
    {
      id: 1,
      company: "TechCorp",
      role: "Frontend Developer",
      status: "applied",
      appliedDate: "Apr 12, 2024",
    },
    {
      id: 2,
      company: "WebSolutions",
      role: "UI/UX Designer",
      status: "interview",
      appliedDate: "Apr 8, 2024",
    },
    {
      id: 3,
      company: "DataWorks",
      role: "Data Analyst",
      status: "offer",
      appliedDate: "Mar 30, 2024",
    },
    {
      id: 4,
      company: "RetailCo",
      role: "Product Manager",
      status: "rejected",
      appliedDate: "Mar 25, 2024",
    },
  ]);

  const filterStatus = ref("all");
  const searchQuery = ref("");

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

  const stats = computed(() => ({
    unreadMessages: 2,
    interviewsThisWeek: 3,
    totalApplications: jobs.value.length,
    offers: jobs.value.filter((j) => j.status === "offer").length,
  }));

  const setFilter = (status, search) => {
    filterStatus.value = status;
    searchQuery.value = search;
  };

  const addJob = (job) => {
    jobs.value.unshift({
      id: Date.now(),
      ...job,
    });
  };

  return {
    jobs,
    filteredJobs,
    recentJobs,
    stats,
    filterStatus,
    searchQuery,
    setFilter,
    addJob,
  };
});
