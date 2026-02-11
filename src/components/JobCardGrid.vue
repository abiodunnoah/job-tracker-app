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
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
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

/* Layout handled by Tailwind */
