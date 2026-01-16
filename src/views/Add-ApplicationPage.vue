<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import { reactive } from "vue";
import { useJobsStore } from "@/stores/jobsStore";
import { useRouter } from "vue-router";

const jobsStore = useJobsStore();
const router = useRouter();

const form = reactive({
  company: "",
  position: "",
  status: "applied",
  date: new Date().toISOString().split("T")[0],
  location: "",
  url: "",
  notes: "",
});

const handleSubmit = () => {
  if (!form.company || !form.position) return;

  const newJob = {
    company: form.company,
    role: form.position,
    status: form.status.toLowerCase(), // Store expects lowercase "applied", "interview", "offer", "rejected"
    appliedDate: new Date(form.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    location: form.location,
    url: form.url,
    notes: form.notes,
  };

  jobsStore.addJob(newJob);
  router.push("/applications");
};
</script>

<template>
  <div class="min-h-screen flex bg-gray-50">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar title="Add Application" />

      <div class="p-6 md:p-10">
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Company Name -->
            <div class="form-group">
              <label
                for="company"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Company Name</label
              >
              <input
                v-model="form.company"
                type="text"
                id="company"
                required
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="e.g. Google"
              />
            </div>

            <!-- Position -->
            <div class="form-group">
              <label
                for="position"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Position</label
              >
              <input
                v-model="form.position"
                type="text"
                id="position"
                required
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="e.g. Frontend Developer"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Status -->
              <div class="form-group">
                <label
                  for="status"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Status</label
                >
                <div class="relative">
                  <select
                    v-model="form.status"
                    id="status"
                    class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="applied">Applied</option>
                    <option value="interview">Interviewing</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Application Date -->
              <div class="form-group">
                <label
                  for="date"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Application Date</label
                >
                <div class="relative">
                  <input
                    v-model="form.date"
                    type="date"
                    id="date"
                    class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <!-- Location -->
            <div class="form-group">
              <label
                for="location"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Location</label
              >
              <input
                v-model="form.location"
                type="text"
                id="location"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="e.g. Remote"
              />
            </div>

            <!-- Job Posting URL -->
            <div class="form-group">
              <label
                for="url"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Job Posting URL
                <span class="text-gray-400 font-normal">(Optional)</span></label
              >
              <input
                v-model="form.url"
                type="url"
                id="url"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="https://"
              />
            </div>

            <!-- Notes -->
            <div class="form-group">
              <label
                for="notes"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Notes
                <span class="text-gray-400 font-normal">(Optional)</span></label
              >
              <textarea
                v-model="form.notes"
                id="notes"
                rows="4"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <!-- Actions -->
            <div class="flex justify-end pt-4">
              <button
                type="submit"
                class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm"
              >
                Add Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
