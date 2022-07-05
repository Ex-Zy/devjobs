<script setup>
import JobModel from "@models/job.model.js";
defineProps({
  job: { type: Object, default: () => new JobModel() },
});

function getImageUrl(name) {
  return new URL(`../../assets/logos/${name}`, import.meta.url).href;
}
</script>

<template>
  <router-link :to="`/jobs/${job.id}`" class="card">
    <div
      v-if="!!job.logo.length"
      class="card__logo"
      :style="{ background: job.logoBackground }"
    >
      <img :src="getImageUrl(job.logo)" :alt="`Company ${job.company} logo`" />
    </div>
    <div class="card__top">
      <div class="card__posted">{{ job.postedAt }}</div>
      <div class="card__divider"></div>
      <div class="card__contract">{{ job.contract }}</div>
    </div>
    <div class="card__position title-h3">{{ job.position }}</div>
    <div class="card__company">{{ job.company }}</div>
    <div class="card__location">{{ job.location }}</div>
  </router-link>
</template>

<style lang="postcss">
.card {
  --padding: 32px;
  --padding-content: 16px;
  --logo-size: 50px;
  --logo-left-position: var(--padding);
  --divider-size: 4px;
  --location-color: var(--button-bg1);

  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: var(--padding);
  /* transition: background 0.25s; */

  &:hover {
    background: var(--button-bg2);
  }
  &__logo {
    position: absolute;
    width: var(--logo-size);
    height: var(--logo-size);
    left: var(--logo-left-position);
    top: calc(var(--logo-size) / 2 * -1);
    border-radius: var(--radius);
    display: grid;
    place-content: center;
  }
  &__top {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }
  &__top,
  &__position,
  &__company {
    margin-top: var(--padding-content);
  }
  &__location {
    margin-top: auto;
    font-size: 14rem;
    font-weight: 700;
    color: var(--location-color);
  }
  &__divider {
    border-radius: 50%;
    width: var(--divider-size);
    height: var(--divider-size);
    background: var(--text-color);
  }
}
</style>
