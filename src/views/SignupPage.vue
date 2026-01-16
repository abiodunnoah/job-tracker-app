<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const handleSignup = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  console.log("Signup attempt:", {
    name: fullName.value,
    email: email.value,
  });
  // Future Firebase integration here
  router.push("/");
};

const handleGoogleSignup = () => {
  console.log("Google Signup attempt");
};
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Branding -->
    <div
      class="hidden lg:flex lg:w-1/2 bg-blue-600 flex-col justify-center px-12 relative overflow-hidden"
    >
      <!-- Abstract Background shapes -->
      <div
        class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
      >
        <svg
          viewBox="0 0 100 100"
          class="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] text-white fill-current"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg
          viewBox="0 0 100 100"
          class="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] text-white fill-current"
        >
          <rect x="0" y="0" width="100" height="100" rx="20" />
        </svg>
      </div>

      <div class="relative z-10 text-white">
        <h1 class="text-3xl font-bold tracking-wide mb-4">Job Tracker</h1>
        <h2 class="text-4xl font-extrabold mb-6 leading-tight">
          Start your journey <br />with us today.
        </h2>
        <p class="text-blue-100 text-lg max-w-md">
          Create an account to manage your applications, track interviews, and
          land your dream job.
        </p>
      </div>
    </div>

    <!-- Right Side - Form -->
    <div
      class="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 lg:p-24"
    >
      <div class="w-full max-w-md">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
        <p class="text-gray-500 mb-8">Join to track your jobs</p>

        <form @submit.prevent="handleSignup" class="space-y-4">
          <button
            type="button"
            @click="handleGoogleSignup"
            class="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-50 transition-all active:scale-[0.98]"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              class="w-5 h-5"
              alt="Google"
            />
            Sign up with Google
          </button>

          <div class="relative flex py-2 items-center">
            <div class="flex-grow border-t border-gray-200"></div>
            <span class="flex-shrink-0 mx-4 text-gray-400 text-sm">Or</span>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Full Name</label
            >
            <input
              v-model="fullName"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
              placeholder="Name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Email Address</label
            >
            <input
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Password</label
            >
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                placeholder="••••••••"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
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
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Confirm Password</label
            >
            <div class="relative">
              <input
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                placeholder="••••••••"
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
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

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] mt-4"
          >
            Sign Up
          </button>
        </form>

        <p class="mt-8 text-center text-sm text-gray-500">
          Already have an account?
          <router-link
            to="/login"
            class="text-blue-600 hover:text-blue-700 font-semibold"
            >Sign in</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
