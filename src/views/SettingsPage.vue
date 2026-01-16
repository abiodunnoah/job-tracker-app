<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="min-h-screen flex bg-gray-100">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar title="Settings" />

      <div class="bg-white m-6 rounded-lg shadow-md">
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
          <div class="flex items-center gap-4">
            <div class="user-avatar">
              <img
                src="@/assets/avatar/58509050_9434619.jpg"
                alt="User avatar"
                class="w-16 h-16 rounded-full"
              />
            </div>
            <div>
              <span class="user-name">Noah</span>
              <div class="flex flex-col gap-2">
                <form action="">
                  <input type="text" placeholder="Enter your name" />
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Update Profile</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
