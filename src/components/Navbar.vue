<script setup>
import getUser from "../composables/getUser";
import { computed } from "vue";

defineProps({
  title: {
    type: String,
    default: "Job Applications",
  },
});

const { user } = getUser();

const displayName = computed(() => {
  const name = user.value?.displayName || "User";
  return name.split(" ")[1];
});

const photoURL = computed(() => {
  return user.value?.photoURL;
});
</script>

<template>
  <header
    class="navbar flex items-center justify-between px-4 py-3 md:py-4 md:px-8 border-b border-gray-200 sticky top-0 z-30 bg-white/95 backdrop-blur-sm"
  >
    <h1 class="navbar-title text-lg font-semibold md:text-2xl">{{ title }}</h1>

    <div v-if="user" class="navbar-user">
      <div class="user-avatar">
        <img
          v-if="photoURL"
          :src="photoURL"
          alt="User avatar"
          referrerpolicy="no-referrer"
        />
        <img
          v-else
          src="@/assets/avatar/58509050_9434619.jpg"
          alt="Default avatar"
        />
      </div>
      <span class="user-name hidden md:block">Hi {{ displayName }}</span>
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
        <!-- <polyline points="6 9 12 15 18 9" /> -->
      </svg>
    </div>
    <div v-else class="navbar-actions">
      <router-link to="/login" class="login-btn">Log in</router-link>
      <router-link to="/signup" class="signup-btn">Sign up</router-link>
    </div>
  </header>
</template>

<style scoped>
.navbar-title {
  color: #1f2937;
  margin: 0;
}

.navbar-user {
  display: flex;
  align-items: center;
  gap: 10px;
  /* cursor: pointer; */
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

.navbar-actions {
  display: flex;
  gap: 12px;
}

.login-btn,
.signup-btn {
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 14px;
}

.login-btn {
  color: #374151;
  background-color: transparent;
}

.login-btn:hover {
  background-color: #f3f4f6;
  color: #1f2937;
}

.signup-btn {
  background-color: #2563eb;
  color: white;
}

.signup-btn:hover {
  background-color: #1d4ed8;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
}
</style>
