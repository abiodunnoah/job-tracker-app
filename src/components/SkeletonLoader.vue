<script setup>
defineProps({
  count: {
    type: Number,
    default: 1,
  },
  type: {
    type: String,
    default: "card", // 'card' or 'text'
  },
});
</script>

<template>
  <div class="skeleton-container animate-pulse">
    <div v-for="n in count" :key="n" class="skeleton-item mb-4">
      <!-- Card Skeleton -->
      <div
        v-if="type === 'card'"
        class="bg-white rounded-xl p-5 border border-gray-100 h-[140px]"
      >
        <div class="flex justify-between items-start mb-4">
          <div class="h-6 bg-gray-200 rounded w-1/3"></div>
          <div class="h-6 bg-gray-200 rounded-full w-20"></div>
        </div>
        <div class="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div class="flex justify-between items-end mt-auto">
          <div class="h-4 bg-gray-200 rounded w-1/5"></div>
          <div class="h-4 bg-gray-200 rounded w-1/6"></div>
        </div>
      </div>

      <!-- Text/Row Skeleton -->
      <div v-else class="flex gap-4">
        <div class="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  </div>
</template>
