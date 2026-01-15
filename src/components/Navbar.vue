<script setup>
defineProps({
  title: {
    type: String,
    default: "Job Applications",
  },
});
</script>

<template>
  <header class="navbar">
    <h1 class="navbar-title">{{ title }}</h1>

    <div class="navbar-user">
      <div class="user-avatar">
        <img src="@/assets/avatar/58509050_9434619.jpg" alt="User avatar" />
      </div>
      <span class="user-name">Noah</span>
      <svg
        class="user-dropdown-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.navbar-title {
  font-size: 22px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.navbar-user {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  background-color: white;
  border-radius: 2rem;
}

.navbar-user:hover {
  background-color: #f3f4f6;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.user-dropdown-icon {
  color: #6b7280;
}
</style>
