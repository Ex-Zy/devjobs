<script setup>
import FilterJobs from "@components/FilterJobs.vue";
import ListJobs from "@jobs/ListJobs.vue";
import { useJobs } from "@use/useJobs";
const { jobs } = useJobs();
</script>

<template>
  <FilterJobs />
  <LoaderBase v-if="!jobs.length" />
  <ListJobs v-else :jobs="jobs" />
</template>

<style lang="postcss"></style>
