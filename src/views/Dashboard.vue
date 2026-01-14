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
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-gray-800 header-try">
            Recent Applications
          </h2>
          <p class="text-sm text-gray-500 mb-6">
            Your most recent job activities
          </p>
        </div>
        <JobCardGrid :jobs="jobsStore.recentJobs" />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
