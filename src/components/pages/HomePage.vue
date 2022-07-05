<script setup>
import FilterJobs from "@components/FilterJobs.vue";
import ListJobs from "@jobs/ListJobs.vue";
import JobsApi from "@api/jobs.api.js";
import { onMounted, reactive } from "vue";

const jobs = reactive([]);

async function getJobs() {
  const items = await JobsApi.getAll();
  jobs.push(...items);
}

onMounted(async () => {
  await getJobs();
});
</script>

<template>
  <FilterJobs />
  <LoaderBase v-if="!jobs.length" />
  <ListJobs v-else :jobs="jobs" />
</template>

<style lang="postcss"></style>
