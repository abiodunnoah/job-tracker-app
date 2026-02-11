<script setup>
import { useRouter } from "vue-router";
import { useJobsStore } from "../stores/jobsStore";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import MobileNavbar from "@/components/MobileNavbar.vue";
import FilterBar from "../components/FilterBar.vue";
import StatsBadge from "../components/StatsBadge.vue";
import JobCardGrid from "../components/JobCardGrid.vue";
import EmptyState from "../components/EmptyState.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";

const router = useRouter();
const jobsStore = useJobsStore();

const handleFilter = (filters) => {
  jobsStore.setFilter(filters.status, filters.search);
};

const navigateToAdd = () => {
  router.push("/add-application");
};
</script>

<template>
  <div class="min-h-screen flex bg-gray-100">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar title="Applications" />

      <div class="p-4 md:p-6 pb-24 md:pb-6">
        <FilterBar @filter="handleFilter" />

        <div class="flex flex-col md:flex-row gap-4 mb-6">
          <StatsBadge
            icon="dot"
            color="green"
            :text="`${jobsStore.stats.unreadMessages} Unread Messages`"
          />
          <StatsBadge
            icon="diamond"
            color="blue"
            :text="`${jobsStore.stats.interviewsThisWeek} Interviews This Week`"
          />
        </div>

        <div
          v-if="jobsStore.error"
          class="bg-red-50 text-red-700 p-4 rounded-lg mb-6 flex items-center gap-3 border border-red-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          <div>
            <p class="font-medium">Failed to load applications</p>
            <p class="text-sm opacity-90">{{ jobsStore.error }}</p>
          </div>
        </div>

        <!-- Loading State -->
        <div
          v-if="jobsStore.isLoading"
          class="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <SkeletonLoader :count="6" type="card" />
        </div>

        <JobCardGrid
          v-else-if="jobsStore.filteredJobs.length"
          :jobs="jobsStore.filteredJobs"
          :limit="jobsStore.filteredJobs.length"
        />
        <EmptyState v-else @add="navigateToAdd" />
      </div>
    </div>
    <MobileNavbar />
  </div>
</template>

/* Layout handled by Tailwind */
