<script setup>
import FilterJobs from "@components/FilterJobs.vue";
import ListJobs from "@jobs/ListJobs.vue";
import { useJobs } from "@use/useJobs";
import { ref, watch } from "vue";

const { jobs } = useJobs();

const visibleJobs = ref([]);
const showCount = ref(8);
const step = ref(4);

watch(jobs, () => {
  updateVisibleJobs(showCount.value);
});

function updateVisibleJobs(count) {
  visibleJobs.value = jobs.slice(0, count);
}

function updateShowCount() {
  showCount.value = visibleJobs.value.length;
}

function loadMoreJobs() {
  const count = visibleJobs.value.length + step.value;

  updateVisibleJobs(count);
  updateShowCount();
}
</script>

<template>
  <FilterJobs />
  <LoaderBase v-if="!visibleJobs.length" />
  <ListJobs v-else :jobs="visibleJobs" />
  <div v-if="showCount < jobs.length" class="load-more">
    <ButtonEl title="Load more" @click="loadMoreJobs" class="load-more__btn" />
  </div>
</template>

<style lang="postcss">
.load-more {
  margin: auto auto 100px;
}
.load-button {
}
</style>
