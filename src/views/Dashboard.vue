<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import JobCardGrid from "@/components/JobCardGrid.vue";
import { useJobsStore } from "../stores/jobsStore";

const jobsStore = useJobsStore();
</script>

<template>
  <div class="min-h-screen flex bg-gray-100">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar />

      <!-- Main page -->
      <main class="flex-1 p-8">
        <!-- Empty State -->
        <div
          v-if="!jobsStore.isLoading && jobsStore.jobs.length === 0"
          class="flex flex-col items-center justify-center h-[60vh] text-center"
        >
          <div
            class="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800 mb-3">
            No applications yet
          </h2>
          <p class="text-gray-500 mb-8 max-w-md">
            Start tracking your job search journey today. Add your first
            application to stay organized.
          </p>
          <router-link
            to="/add-application"
            class="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Add Application
          </router-link>
        </div>

        <div v-else class="mb-6">
          <h2 class="text-xl font-semibold text-gray-800 header-try">
            Recent Applications
          </h2>
          <p class="text-sm text-gray-500 mb-6">
            Your most recent job activities
          </p>
        </div>
        <JobCardGrid
          v-if="jobsStore.jobs.length > 0"
          :jobs="jobsStore.recentJobs"
        />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
