<script setup>
import { useRouter } from "vue-router";
import { useJobsStore } from "../stores/jobsStore";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import FilterBar from "../components/FilterBar.vue";
import StatsBadge from "../components/StatsBadge.vue";
import JobCardGrid from "../components/JobCardGrid.vue";
import EmptyState from "../components/EmptyState.vue";

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

      <div class="applications-page">
        <FilterBar @filter="handleFilter" />

        <div class="stats-row">
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

        <JobCardGrid
          v-if="jobsStore.filteredJobs.length"
          :jobs="jobsStore.filteredJobs"
          :limit="4"
        />
        <EmptyState v-else @add="navigateToAdd" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.applications-page {
  padding: 24px;
}

.stats-row {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}
</style>
