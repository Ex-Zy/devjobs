<script setup>
import FilterJobs from "@jobs/FilterJobs.vue";
import ListJobs from "@jobs/ListJobs.vue";
import JobsApi from "@api/jobs.api.js";
import { computed, onMounted, reactive } from "vue";

const state = reactive({
  jobs: [],
  limit: 8,
  error: null,
});

const visibleJobs = computed(() =>
  state.jobs.length < state.limit
    ? state.jobs
    : state.jobs.slice(0, state.limit)
);
const isVisibleLoadMore = computed(() => visibleJobs.value < state.jobs);

onMounted(fetchJobs);

async function fetchJobs() {
  const { type, data, error } = await JobsApi.getAll();

  if (type === "error") {
    return (state.error = error);
  }

  state.jobs = data;
}

function loadMore() {
  state.limit += 4;
}
</script>

<template>
  <FilterJobs />
  <div v-if="state.error" class="error-msg title-h1">
    Api error: {{ state.error }}
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
  margin-top: 100px;
  text-align: center;
}
</style>
