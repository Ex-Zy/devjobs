<script setup>
import FilterJobs from "@jobs/FilterJobs.vue";
import ListJobs from "@jobs/ListJobs.vue";
import { useJobs } from "@use/useJobs";
import { ref } from "vue";

const { jobs } = useJobs();
const showItems = ref(8);

function loadMore(step = 4) {
  showItems.value =
    showItems.value + step < jobs.length ? showItems.value + step : jobs.length;
}
</script>

<template>
  <FilterJobs />
  <ListJobs :jobs="jobs" :showItems="showItems" />
  <div v-if="showItems < jobs.length" class="load-more">
    <ButtonEl title="Load more" @click="loadMore" class="load-more__btn" />
  </div>
</template>

<style lang="postcss">
.load-more {
  margin: auto auto 0;
  padding-bottom: 100px;
}
</style>
