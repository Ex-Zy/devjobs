<script setup>
import FilterJobs from "@jobs/FilterJobs.vue";
import ListJobs from "@jobs/ListJobs.vue";
import { onMounted } from "vue";
import useJobs from "@use/useJobs";

const { state, visibleJobs, isVisibleLoadMore, fetchJobs, loadMore } =
  useJobs();

// Hooks
onMounted(fetchJobs);
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
