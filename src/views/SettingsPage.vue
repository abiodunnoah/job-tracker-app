<script setup>
import { ref } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

const name = ref("");
const email = ref("");

const preferences = ref({
  emailNotifications: true,
  unreadMessages: true,
  interviewReminders: true,
  jobStatusUpdates: true,
});

const updateProfile = () => {
  console.log("Profile updated:", { name: name.value, email: email.value });
};

const formatLabel = (key) => {
  return key.replace(/([A-Z])/g, " $1").trim();
};
</script>

<template>
  <div class="min-h-screen flex bg-slate-50 font-sans">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar title="Settings" />

      <main class="flex-1 p-6 lg:p-10 overflow-y-auto">
        <div class="max-w-6xl mx-auto space-y-8">
          <!-- Profile Section -->
          <div
            class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
          >
            <h2 class="text-xl font-bold text-slate-800 mb-6">Profile</h2>

            <div class="flex flex-col md:flex-row gap-8 items-start">
              <!-- Avatar -->
              <div class="flex-shrink-0">
                <div
                  class="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm"
                >
                  <img
                    src="@/assets/avatar/58509050_9434619.jpg"
                    alt="Noah"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>

              <!-- Form -->
              <div class="flex-1 w-full space-y-5">
                <div>
                  <label
                    class="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    v-model="name"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    v-model="email"
                    type="email"
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium"
                  />
                </div>

                <div class="pt-2">
                  <button
                    @click="updateProfile"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/30 active:scale-[0.98]"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Preferences Section -->
          <div
            class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
          >
            <h2 class="text-xl font-bold text-slate-800 mb-6">
              Notification Preferences
            </h2>

            <div class="space-y-6">
              <div
                v-for="(value, key) in preferences"
                :key="key"
                class="flex items-center justify-between pb-6 border-b border-slate-50 last:border-0 last:pb-0"
              >
                <span class="text-slate-700 font-medium capitalize">
                  {{ formatLabel(key) }}
                </span>

                <!-- Toggle Switch -->
                <button
                  @click="preferences[key] = !preferences[key]"
                  class="relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none"
                  :class="preferences[key] ? 'bg-blue-600' : 'bg-slate-200'"
                >
                  <span
                    class="inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm"
                    :class="
                      preferences[key] ? 'translate-x-6' : 'translate-x-1'
                    "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
