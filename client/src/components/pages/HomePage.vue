<script setup>
import FilterJobs from "@jobs/FilterJobs.vue";
import ListJobs from "@jobs/ListJobs.vue";
import JobsApi from "@api/jobs.api.js";
import JobsSerives from "@services/jobs.service.js";
import { computed, onMounted, reactive } from "vue";

// Data
const state = reactive({
  jobs: [],
  limit: 8,
  error: null,
});
const visibleJobs = computed(getVisibleJobs);
const isVisibleLoadMore = computed(
  () => visibleJobs.value < state.jobs && !state.error
);

// Hooks
onMounted(fetchJobs);

// Methods
async function fetchJobs(params) {
  const { type, data, error } = params
    ? await JobsSerives.filter(params)
    : await JobsApi.getAll();

  if (type === "error") {
    return (state.error = error);
  }

  state.error = null;
  state.jobs = data;
}
function loadMore() {
  state.limit += 4;
}
function getVisibleJobs() {
  if (state.jobs.length < state.limit) {
    return state.jobs;
  }

  return state.jobs.slice(0, state.limit);
}
</script>

<template>
  <FilterJobs @update:filter="fetchJobs" />
  <div v-if="state.error" class="error-msg title-h1">
    {{ state.error }}
  </div>
  <ListJobs v-else :jobs="visibleJobs" />
  <div v-if="isVisibleLoadMore" class="load-more">
    <ButtonEl title="Load more" @click="loadMore" class="load-more__btn" />
  </div>
</template>

<style lang="postcss">
.load-more {
  margin: auto auto 0;
  padding-bottom: 100px;
}
.error-msg {
  text-align: center;
}
</style>
