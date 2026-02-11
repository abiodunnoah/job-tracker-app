<script setup>
import { reactive, watch } from "vue";
import { NSpin } from "naive-ui";

const props = defineProps({
  show: Boolean,
  job: Object,
  isLoading: Boolean,
});

const emit = defineEmits(["close", "save"]);

const form = reactive({
  company: "",
  role: "",
  status: "applied",
  location: "",
  url: "",
  notes: "",
});

// Watch for job prop changes to update form data when modal opens
watch(
  () => props.job,
  (newJob) => {
    if (newJob) {
      form.company = newJob.company;
      form.role = newJob.role;
      form.status = newJob.status;
      form.location = newJob.location || "";
      form.url = newJob.url || "";
      form.notes = newJob.notes || "";
    }
  },
  { immediate: true },
);

const handleSubmit = () => {
  emit("save", { ...form });
};
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- Backdrop -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      @click="$emit('close')"
    ></div>

    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
      >
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start w-full">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3
                class="text-lg font-semibold leading-6 text-gray-900 mb-4"
                id="modal-title"
              >
                Edit Application
              </h3>

              <form @submit.prevent="handleSubmit" class="space-y-4">
                <!-- Company -->
                <div>
                  <label
                    for="company"
                    class="block text-sm font-medium text-gray-700"
                    >Company</label
                  >
                  <input
                    type="text"
                    id="company"
                    v-model="form.company"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                  />
                </div>

                <!-- Role -->
                <div>
                  <label
                    for="role"
                    class="block text-sm font-medium text-gray-700"
                    >Role</label
                  >
                  <input
                    type="text"
                    id="role"
                    v-model="form.role"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                  />
                </div>

                <!-- Status -->
                <div>
                  <label
                    for="status"
                    class="block text-sm font-medium text-gray-700"
                    >Status</label
                  >
                  <select
                    id="status"
                    v-model="form.status"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                  >
                    <option value="applied">Applied</option>
                    <option value="interview">Interviewing</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <!-- Location -->
                <div>
                  <label
                    for="location"
                    class="block text-sm font-medium text-gray-700"
                    >Location</label
                  >
                  <input
                    type="text"
                    id="location"
                    v-model="form.location"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                  />
                </div>

                <!-- URL -->
                <div>
                  <label
                    for="url"
                    class="block text-sm font-medium text-gray-700"
                    >Job URL</label
                  >
                  <input
                    type="url"
                    id="url"
                    v-model="form.url"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2"
                  />
                </div>

                <!-- Notes -->
                <div>
                  <label
                    for="notes"
                    class="block text-sm font-medium text-gray-700"
                    >Notes</label
                  >
                  <textarea
                    id="notes"
                    v-model="form.notes"
                    rows="3"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 resize-none"
                  ></textarea>
                </div>

                <div
                  class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 -mx-6 -mb-6 mt-6"
                >
                  <button
                    type="submit"
                    :disabled="isLoading"
                    class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto items-center gap-2"
                  >
                    <NSpin v-if="isLoading" size="small" stroke="white" />
                    {{ isLoading ? "Saving..." : "Save Changes" }}
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    @click="$emit('close')"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
