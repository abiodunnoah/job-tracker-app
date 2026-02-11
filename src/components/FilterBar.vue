<script setup>
import { ref } from "vue";

const selectedStatus = ref("all");
const searchQuery = ref("");

const emit = defineEmits(["filter"]);

const statusOptions = [
  { value: "all", label: "All" },
  { value: "applied", label: "Applied" },
  { value: "interview", label: "Interview" },
  { value: "offer", label: "Offer" },
  { value: "rejected", label: "Rejected" },
];

const handleFilter = () => {
  emit("filter", {
    status: selectedStatus.value,
    search: searchQuery.value,
  });
};
</script>

<template>
  <div
    class="filter-bar flex flex-col md:flex-row items-stretch md:items-center gap-4 p-4 mb-5"
  >
    <div class="filter-group">
      <label class="filter-label">Status:</label>
      <select v-model="selectedStatus" class="filter-select">
        <option
          v-for="option in statusOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>

    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search jobs..."
      class="filter-search"
    />

    <button class="filter-btn" @click="handleFilter">Filter</button>
  </div>
</template>

<style scoped>
/* Layout handled by Tailwind */
.filter-bar {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); /* Keep shadow/bg/radius if preferred, or move to tailwind */
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  color: #374151;
  background-color: white;
  cursor: pointer;
  min-width: 100px;
}

.filter-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.filter-search {
  flex: 1;
  padding: 10px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  max-width: 300px;
}

.filter-search:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.filter-search::placeholder {
  color: #9ca3af;
}

.filter-btn {
  padding: 10px 24px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.filter-btn:hover {
  background-color: #2563eb;
}
</style>
