<script setup>
import FilterJobs from "@components/FilterJobs.vue";
import ListJobs from "@jobs/ListJobs.vue";
import { useJobs } from "@use/useJobs";
import { useLoadMoreJobs } from "@use/useLoadMoreJobs";

const { jobs } = useJobs();
const { visibleJobs, isVisibleLoadButton, loadMoreJobs } =
  useLoadMoreJobs(jobs);
</script>

<template>
  <FilterJobs />
  <LoaderBase v-if="!visibleJobs.length" />
  <ListJobs v-else :jobs="visibleJobs" />
  <div v-if="isVisibleLoadButton" class="load-more">
    <ButtonEl title="Load more" @click="loadMoreJobs" class="load-more__btn" />
  </div>
</template>

<style lang="postcss">
.load-more {
  margin: auto auto 0;
  padding-bottom: 100px;
}
</style>
