<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useJobsStore } from "@/stores/jobsStore";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import MobileNavbar from "@/components/MobileNavbar.vue";
import StatusBadge from "../components/StatusBadge.vue";

import ConfirmationModal from "../components/ConfirmationModal.vue";
import EditJobModal from "../components/EditJobModal.vue";

const route = useRoute();
const router = useRouter();
const jobsStore = useJobsStore();

const jobId = computed(() => route.params.id);
const job = computed(() => jobsStore.jobs.find((j) => j.id === jobId.value));
const showDeleteModal = ref(false);
const showEditModal = ref(false);
const isEditing = ref(false);

const goBack = () => {
  router.back();
};

const handleDelete = () => {
  showDeleteModal.value = true;
};

const handleEdit = () => {
  showEditModal.value = true;
};

const confirmDelete = async () => {
  await jobsStore.deleteJob(job.value.id);
  showDeleteModal.value = false;
  router.push("/applications");
};

const handleSaveEdit = async (updatedData) => {
  isEditing.value = true;
  try {
    await jobsStore.updateJob(job.value.id, updatedData);
    showEditModal.value = false;
  } catch (error) {
    console.error("Failed to update job", error);
  } finally {
    isEditing.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen flex bg-gray-50">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Navbar title="Job Details" />

      <main class="flex-1 p-4 md:p-10 pb-24 md:pb-10">
        <div v-if="job" class="max-w-4xl mx-auto">
          <!-- Back Button -->
          <button
            @click="goBack"
            class="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Applications
          </button>

          <div
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <!-- Header -->
            <div class="p-4 md:p-8 border-b border-gray-100">
              <div
                class="flex flex-col md:flex-row justify-between items-start gap-4"
              >
                <div class="w-full md:w-auto">
                  <h1
                    class="text-2xl md:text-3xl font-bold text-gray-900 mb-2 break-words"
                  >
                    {{ job.company }}
                  </h1>
                  <h2
                    class="text-lg md:text-xl text-gray-600 font-medium break-words"
                  >
                    {{ job.role }}
                  </h2>
                </div>
                <div
                  class="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end mt-2 md:mt-0"
                >
                  <StatusBadge :status="job.status" class="scale-110" />
                  <div class="flex gap-2">
                    <button
                      @click="handleEdit"
                      class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      title="Edit Application"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      @click="handleDelete"
                      class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      title="Delete Application"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path
                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        ></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Left Column: Details -->
              <div class="space-y-6">
                <div>
                  <h3
                    class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Location
                  </h3>
                  <p class="text-gray-900 font-medium">
                    {{ job.location || "Not specified" }}
                  </p>
                </div>

                <div>
                  <h3
                    class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Applied Date
                  </h3>
                  <p class="text-gray-900 font-medium">{{ job.appliedDate }}</p>
                </div>

                <div>
                  <h3
                    class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2"
                  >
                    Job URL
                  </h3>
                  <a
                    v-if="job.url"
                    :href="job.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 hover:underline break-all"
                  >
                    {{ job.url }}
                  </a>
                  <p v-else class="text-gray-400 italic">No URL provided</p>
                </div>
              </div>

              <!-- Right Column: Notes -->
              <div>
                <h3
                  class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
                >
                  Notes
                </h3>
                <div
                  class="bg-gray-50 rounded-xl p-6 h-full min-h-[200px] border border-gray-100"
                >
                  <p class="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {{ job.notes || "No notes added for this application." }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Not Found State -->
        <div v-else class="flex flex-col items-center justify-center py-20">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Job Not Found</h2>
          <p class="text-gray-500 mb-8">
            The application you're looking for doesn't exist or has been
            removed.
          </p>
          <button
            @click="router.push('/applications')"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Go to Applications
          </button>
        </div>
      </main>
    </div>
    <ConfirmationModal
      :show="showDeleteModal"
      title="Delete Application"
      message="Are you sure you want to delete this application? This action cannot be undone."
      @close="showDeleteModal = false"
      @confirm="confirmDelete"
    />
    <EditJobModal
      :show="showEditModal"
      :job="job"
      :is-loading="isEditing"
      @close="showEditModal = false"
      @save="handleSaveEdit"
    />
    <MobileNavbar />
  </div>
</template>
