<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="min-h-screen flex bg-gray-100">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar />

      <div class="add-application-page">
        <h1>Add Application</h1>
      </div>
    </div>
  </div>
</template>
