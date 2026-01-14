<script setup>
import StatusBadge from "./StatusBadge.vue";

defineProps({
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  appliedDate: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="job-card">
    <h3 class="job-company">{{ company }}</h3>
    <p class="job-role">{{ role }}</p>
    <StatusBadge :status="status" />
    <p class="job-date">Applied on: {{ appliedDate }}</p>
  </div>
</template>

<style scoped>
.job-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.job-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.job-company {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.job-role {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.job-date {
  font-size: 13px;
  color: #9ca3af;
  margin: 8px 0 0 0;
}
</style>
