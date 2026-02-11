<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden flex justify-around items-center px-2 py-3 safe-area-pb shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"
  >
    <router-link
      to="/"
      class="flex flex-col items-center gap-1 p-2 rounded-lg transition-colors"
      :class="
        route.path === '/'
          ? 'text-blue-600'
          : 'text-gray-400 hover:text-gray-600'
      "
    >
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
      <span class="text-[10px] font-medium">Home</span>
    </router-link>

    <router-link
      to="/applications"
      class="flex flex-col items-center gap-1 p-2 rounded-lg transition-colors"
      :class="
        route.path === '/applications'
          ? 'text-blue-600'
          : 'text-gray-400 hover:text-gray-600'
      "
    >
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
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
      <span class="text-[10px] font-medium">Apps</span>
    </router-link>

    <router-link
      to="/add-application"
      class="flex flex-col items-center justify-center -mt-8"
    >
      <div
        class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    </router-link>

    <router-link
      to="/logout"
      class="flex flex-col items-center gap-1 p-2 rounded-lg transition-colors"
      :class="
        route.path === '/logout'
          ? 'text-blue-600'
          : 'text-gray-400 hover:text-gray-600'
      "
    >
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
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
      <span class="text-[10px] font-medium">Logout</span>
    </router-link>
  </nav>
</template>

<style scoped>
.safe-area-pb {
  padding-bottom: env(safe-area-inset-bottom, 12px);
}
</style>
