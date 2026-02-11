<script setup>
import SidebarLink from "../components/SidebarLink.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <aside class="sidebar hidden md:flex flex-col">
    <!-- Logo Section -->
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      </div>
      <h1 class="sidebar-title">Job Tracker</h1>
    </div>

    <!-- Navigation Links -->
    <nav class="sidebar-nav">
      <SidebarLink
        icon="home"
        label="Dashboard"
        to="/"
        :active="route.path === '/'"
      />
      <SidebarLink
        icon="list"
        label="Applications"
        to="/applications"
        :active="route.path === '/applications'"
      />
      <SidebarLink
        icon="plus"
        label="Add Application"
        to="/add-application"
        :active="route.path === '/add-application'"
      />
      <!-- <SidebarLink
        icon="cog"
        label="Settings"
        to="/settings"
        :active="route.path === '/settings'"
      /> -->
      <SidebarLink
        icon="logout"
        label="Logout"
        to="/logout"
        :active="route.path === '/logout'"
      />
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  min-height: 100vh;
  background: linear-gradient(180deg, #ebf2fc 0%, #82a8cf 100%);
  padding: 20px 16px;
  /* Display properties handled by Tailwind classes in template */
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
  padding: 0 8px;
}

.sidebar-logo {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.sidebar-title {
  font-size: 16px;
  font-weight: 600;
  color: #3b82f6;
  margin: 0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
