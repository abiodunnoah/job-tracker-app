<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogin = () => {
  router.push("/login");
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div
      class="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden text-center p-8"
    >
      <!-- Success Icon -->
      <div
        class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
      >
        <svg
          class="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mb-2">Signed Out</h2>
      <p class="text-gray-500 mb-8">
        You have been successfully signed out of your account.
      </p>

      <div class="space-y-3">
        <button
          @click="handleLogin"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors shadow-sm"
        >
          Sign In Again
        </button>
      </div>
    </div>
  </div>
</template>
