<script setup>
import JobCard from "./JobCard.vue";

defineProps({
  jobs: {
    type: Array,
    required: true,
  },
  limit: {
    type: Number,
    default: 4,
  },
});
</script>

<template>
  <div class="job-card-grid">
    <JobCard
      v-for="job in jobs.slice(0, limit)"
      :key="job.id"
      :id="job.id"
      :company="job.company"
      :role="job.role"
      :status="job.status"
      :applied-date="job.appliedDate"
    />
  </div>
</template>

<style scoped>
.job-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .job-card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
