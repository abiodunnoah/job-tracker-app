<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="min-h-screen flex bg-gray-50">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar title="Add Application" />

      <div class="p-6 md:p-10">
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <form class="space-y-6">
            <!-- Company Name -->
            <div class="form-group">
              <label
                for="company"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="e.g. Google"
              />
            </div>

            <!-- Position -->
            <div class="form-group">
              <label
                for="position"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Position</label
              >
              <input
                type="text"
                id="position"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="e.g. Frontend Developer"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Status -->
              <div class="form-group">
                <label
                  for="status"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Status</label
                >
                <div class="relative">
                  <select
                    id="status"
                    class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Application Date -->
              <div class="form-group">
                <label
                  for="date"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Application Date</label
                >
                <div class="relative">
                  <input
                    type="date"
                    id="date"
                    class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <!-- Location -->
            <div class="form-group">
              <label
                for="location"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Location</label
              >
              <input
                type="text"
                id="location"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="e.g. Remote"
              />
            </div>

            <!-- Job Posting URL -->
            <div class="form-group">
              <label
                for="url"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Job Posting URL
                <span class="text-gray-400 font-normal">(Optional)</span></label
              >
              <input
                type="url"
                id="url"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="https://"
              />
            </div>

            <!-- Notes -->
            <div class="form-group">
              <label
                for="notes"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Notes
                <span class="text-gray-400 font-normal">(Optional)</span></label
              >
              <textarea
                id="notes"
                rows="4"
                class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
