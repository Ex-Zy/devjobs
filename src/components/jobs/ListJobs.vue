<script setup>
import CardJobs from "@jobs/CardJobs.vue";
defineProps({
  jobs: { type: Array, default: () => [] },
});
</script>

<template>
  <LoaderBase v-if="!jobs.length" />
  <div v-else class="jobs">
    <div class="jobs__in">
      <CardJobs v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

.jobs {
  padding-bottom: 100px;
  &__in {
    @mixin container;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: repeat(auto-fill, 250px);
    grid-auto-rows: 250px;
    row-gap: 65px;
    column-gap: 30px;
  }
}
</style>
