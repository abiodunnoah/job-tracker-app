<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleLogout = () => {
  console.log("User logged out");
  router.push("/");
};

const handleCancel = () => {
  router.back();
};
</script>

<template>
  <div class="min-h-screen flex bg-gray-50">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar title="Logout" />

      <main class="flex-1 flex flex-col items-center justify-center p-8 -mt-20">
        <!-- Illustration -->
        <div class="mb-8 relative">
          <!-- Background decoration -->
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-xl opacity-60"
          ></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 160"
            class="w-48 h-48 relative z-10"
          >
            <!-- Blue base shadow/ellipse -->
            <ellipse
              cx="100"
              cy="140"
              rx="70"
              ry="10"
              fill="#BFDBFE"
              opacity="0.6"
            />

            <!-- Box (Back/Inside) -->
            <path
              d="M60 70 L100 90 L140 70 L140 110 L100 130 L60 110 Z"
              fill="#D4A373"
            />
            <path d="M60 70 L100 90 L100 130 L60 110 Z" fill="#C59263" />

            <!-- Box (Front Flaps Open) -->
            <path
              d="M60 70 L40 60 L100 50 L140 60 L140 70"
              fill="none"
              stroke="#A98467"
              stroke-width="1"
            />

            <!-- Box (Body) -->
            <path
              d="M50 80 L90 100 L150 80 L150 120 L90 140 L50 120 Z"
              fill="#D4A373"
              stroke="#A98467"
              stroke-width="1"
            />

            <!-- Box Front Faces -->
            <path d="M50 80 L90 100 L90 140 L50 120 Z" fill="#DFA878" />
            <path d="M90 100 L150 80 L150 120 L90 140 Z" fill="#D4A373" />

            <!-- Flaps -->
            <path
              d="M50 80 L30 65 L90 55 L90 100"
              fill="#E5B586"
              opacity="0.9"
            />
            <path
              d="M150 80 L170 65 L110 55 L90 100"
              fill="#E5B586"
              opacity="0.8"
            />

            <!-- Front Flap -->
            <path
              d="M50 80 L90 100 L150 80 L100 100 Z"
              fill="rgba(0,0,0,0.1)"
            />

            <!-- Arrow -->
            <path
              d="M100 80 Q 100 40 140 40 L 135 30 L 160 45 L 135 60 L 140 50 Q 110 50 110 90"
              fill="#7CA3E6"
              stroke="#5B8BDF"
              stroke-width="1"
            />

            <!-- Sparkles -->
            <text x="30" y="70" fill="#FCD34D" font-size="20">✦</text>
            <text x="160" y="90" fill="#FCD34D" font-size="20">✦</text>
            <text x="50" y="50" fill="#FECACA" font-size="10" opacity="0.5">
              ✦
            </text>
          </svg>
        </div>

        <h2 class="text-2xl font-bold text-slate-800 mb-3">
          Are you sure you want to log out?
        </h2>
        <p class="text-slate-500 mb-10 text-center">
          You will need to log back in to access your job applications.
        </p>

        <div class="flex gap-4">
          <button
            @click="handleCancel"
            class="px-8 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors bg-white shadow-sm"
          >
            Cancel
          </button>
          <button
            @click="handleLogout"
            class="px-8 py-2.5 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors shadow-sm shadow-red-200"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  </div>
</template>
