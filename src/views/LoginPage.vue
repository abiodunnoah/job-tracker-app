<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { NSpin } from "naive-ui";

const router = useRouter();

const email = ref("");
const password = ref("");
const showPassword = ref(false);

import useLogin from "../composables/useLogin";

const { login, loginWithGoogle, error, isPending } = useLogin();

const handleLogin = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    console.log("User logged in");
    router.push("/");
  }
};

const handleGoogleLogin = async () => {
  console.log("Google Login attempt");
  await loginWithGoogle();
  if (!error.value) {
    router.push("/");
  }
};
</script>

<template>
  <div class="min-h-screen flex font-sans text-gray-900">
    <!-- Left Side - Branding -->
    <div
      class="hidden lg:flex lg:w-1/2 bg-slate-900 flex-col justify-center px-12 relative overflow-hidden"
    >
      <!-- Abstract Background shapes (Glows) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
        ></div>
      </div>

      <div class="relative z-10 text-white max-w-lg mx-auto">
        <div class="flex items-center gap-3 mb-12">
          <div
            class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span class="text-xl font-bold tracking-tight text-white/90"
            >Job Tracker</span
          >
        </div>

        <h2 class="text-5xl font-bold mb-8 leading-tight tracking-tight">
          Master your <span class="text-blue-400">career</span> journey.
        </h2>

        <p class="text-slate-400 text-lg leading-relaxed mb-12">
          Streamline your job search with intelligent tracking, insights, and
          reminders. Join professionals who are taking control of their future.
        </p>

        <!-- Glassmorphism Stats Card Mockup -->
        <div
          class="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-500"
        >
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="text-xs text-slate-400 uppercase tracking-wider">
                Applications
              </p>
              <p class="text-2xl font-bold text-white">24</p>
            </div>
            <div
              class="text-green-400 bg-green-400/10 px-2 py-1 rounded text-xs"
            >
              +12 this week
            </div>
          </div>
          <div class="w-full bg-white/10 rounded-full h-1.5 mb-2">
            <div class="bg-green-500 h-1.5 rounded-full w-3/4"></div>
          </div>
          <p class="text-xs text-slate-500">75% Response Rate Goal</p>
        </div>
      </div>
    </div>

    <!-- Right Side - Form -->
    <div
      class="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 lg:p-24"
    >
      <div class="w-full max-w-md">
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-slate-900 mb-3">Welcome back</h2>
          <p class="text-slate-500">
            Please enter your details to access your account.
          </p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <button
            type="button"
            @click="handleGoogleLogin"
            class="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-medium py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98] shadow-sm"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              class="w-5 h-5"
              alt="Google"
            />
            <span>Sign in with Google</span>
          </button>

          <div class="relative flex py-2 items-center">
            <div class="flex-grow border-t border-slate-100"></div>
            <span class="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium"
              >Or email</span
            >
            <div class="flex-grow border-t border-slate-100"></div>
          </div>

          <div class="space-y-5">
            <div>
              <label
                class="block text-sm font-medium text-slate-700 mb-1.5"
                for="email"
                >Email address</label
              >
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder-slate-400 text-slate-900"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <div class="flex justify-between items-center mb-1.5">
                <label
                  class="block text-sm font-medium text-slate-700"
                  for="password"
                  >Password</label
                >
              </div>
              <div class="relative">
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder-slate-400 text-slate-900"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none p-1"
                >
                  <svg
                    v-if="!showPassword"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.054 10.054 0 01-1.791 3.07m-2.519 2.519l3.59 3.59"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            v-if="error"
            class="rounded-md bg-red-50 p-4 border border-red-100 animate-pulse"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
              </div>
            </div>
          </div>

          <button
            type="submit"
            :disabled="isPending"
            class="group relative w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 active:scale-[0.98]"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <NSpin v-if="isPending" size="small" stroke="white" />
              <svg
                v-else
                class="h-5 w-5 text-white group-hover:text-gray-200 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            {{ isPending ? "Signing In..." : "Sign In" }}
          </button>
        </form>

        <p class="mt-8 text-center text-sm text-slate-500">
          Don't have an account?
          <router-link
            to="/signup"
            class="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >Sign up for free</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
