<script setup>
defineProps({
  status: {
    type: String,
    required: true,
    validator: (value) =>
      ["applied", "interview", "offer", "rejected"].includes(value),
  },
});

const statusStyles = {
  applied: {
    background: "#dbeafe",
    color: "#1d4ed8",
    label: "Applied",
  },
  interview: {
    background: "#d1fae5",
    color: "#047857",
    label: "Interview",
  },
  offer: {
    background: "#fef3c7",
    color: "#b45309",
    label: "Offer",
  },
  rejected: {
    background: "#fee2e2",
    color: "#dc2626",
    label: "Rejected",
  },
};
</script>

<template>
  <span
    class="status-badge"
    :style="{
      backgroundColor: statusStyles[status].background,
      color: statusStyles[status].color,
    }"
  >
    {{ statusStyles[status].label }}
  </span>
</template>

<style scoped>
.status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
}
</style>
