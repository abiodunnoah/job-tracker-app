<script setup>
defineProps({
  icon: {
    type: String,
    default: "dot",
    validator: (value) => ["dot", "diamond"].includes(value),
  },
  color: {
    type: String,
    default: "green",
    validator: (value) => ["green", "blue"].includes(value),
  },
  text: {
    type: String,
    required: true,
  },
});

const iconColors = {
  green: "#22c55e",
  blue: "#3b82f6",
};
</script>

<template>
  <div class="stats-badge">
    <span class="stats-icon" :style="{ color: iconColors[color] }">
      <template v-if="icon === 'dot'">●</template>
      <template v-else>◆</template>
    </span>
    <span class="stats-text">{{ text }}</span>
  </div>
</template>

<style scoped>
.stats-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: white;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stats-icon {
  font-size: 10px;
}

.stats-text {
  white-space: nowrap;
}
</style>
