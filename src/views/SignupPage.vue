<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { NSpin } from "naive-ui";
import useSignup from "../composables/useSignup";

const router = useRouter();

const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const { signup, error, isLoading } = useSignup();

const handleSignup = async () => {
  error.value = null;

  if (!email.value || !password.value || !fullName.value) {
    error.value = "Please fill in all fields.";
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match.";
    return;
  }

  if (password.value.length < 8) {
    error.value = "Password must be at least 8 characters long.";
    return;
  }

  if (
    password.value.toLowerCase() === "password" ||
    password.value === "12345678"
  ) {
    error.value = "Choose a strong password.";
    return;
  }

  isLoading.value = true;

  await signup(email.value, password.value, fullName.value);
  if (!error.value) {
    router.push("/");
  }
  console.log("Sign up attempt");
};

const handleGoogleSignup = () => {
  console.log("Google Signup attempt");
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
          <h1 class="text-xl font-bold tracking-tight text-white/90">
            Job Tracker
          </h1>
        </div>
        <h2 class="text-5xl font-bold mb-8 leading-tight tracking-tight">
          Unlock your true <span class="text-blue-400">potential</span>.
        </h2>
        <p class="text-slate-400 text-lg leading-relaxed mb-12">
          Start your journey today. Manage applications, track your progress,
          and land the job you've always dreamed of.
        </p>

        <!-- Glassmorphism Card Mockup (Offer Letter) -->
        <div
          class="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl relative"
        >
          <!-- Decorative "New Message" Badge -->
          <div
            class="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
          >
            New Offer!
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center text-white font-bold"
            >
              T
            </div>
            <div class="flex-1">
              <h4 class="text-white font-semibold flex items-center gap-2">
                TechCorp Inc.
                <span class="text-xs font-normal text-slate-400">10m ago</span>
              </h4>
              <p class="text-slate-300 text-sm mt-1">
                We are pleased to offer you the Senior Frontend Developer
                position at TechCorp...
              </p>
              <div class="mt-4 flex gap-2">
                <button
                  class="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors"
                >
                  View Offer
                </button>
                <button
                  class="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-colors"
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side - Form -->
    <div
      class="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 lg:p-24"
    >
      <div class="w-full max-w-md">
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-slate-900 mb-3">Create account</h2>
          <p class="text-slate-500">Start tracking your job search today.</p>
        </div>

        <form @submit.prevent="handleSignup" class="space-y-5">
          <button
            type="button"
            @click="handleGoogleSignup"
            class="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-medium py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98] shadow-sm"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              class="w-5 h-5"
              alt="Google"
            />
            <span>Sign up with Google</span>
          </button>

          <div class="relative flex py-2 items-center">
            <div class="flex-grow border-t border-slate-100"></div>
            <span class="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium"
              >Or details</span
            >
            <div class="flex-grow border-t border-slate-100"></div>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-slate-700 mb-1.5"
              for="fullName"
              >Full Name</label
            >
            <input
              id="fullName"
              v-model="fullName"
              type="text"
              required
              class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder-slate-400 text-slate-900"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium text-slate-700 mb-1.5"
              for="email"
              >Email Address</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder-slate-400 text-slate-900"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium text-slate-700 mb-1.5"
              for="password"
              >Password</label
            >
            <div class="relative">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="new-password"
                required
                class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder-slate-400 text-slate-900"
                placeholder="••••••••"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none p-1"
              >
                <!-- Eye Icon -->
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
                <!-- Eye Off Icon -->
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

          <div>
            <label
              class="block text-sm font-medium text-slate-700 mb-1.5"
              for="confirmPassword"
              >Confirm Password</label
            >
            <div class="relative">
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                autocomplete="new-password"
                required
                class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder-slate-400 text-slate-900"
                placeholder="••••••••"
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none p-1"
              >
                <!-- Eye Icon -->
                <svg
                  v-if="!showConfirmPassword"
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
                <!-- Eye Off Icon -->
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

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="group relative w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 active:scale-[0.98] mt-2"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <NSpin v-if="isLoading" size="small" stroke="white" />
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
              {{ isLoading ? "Signing Up..." : "Sign Up" }}
            </button>
          </div>
        </form>

        <p class="mt-8 text-center text-sm text-slate-500">
          Already have an account?
          <router-link
            to="/login"
            class="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >Sign in</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
