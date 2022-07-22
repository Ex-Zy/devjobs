<script setup>
import JobModel from "@models/job.model.js";

// Props
defineProps({
  job: {
    type: Object,
    default: () => new JobModel(),
  },
});
</script>

<template>
  <div class="job-details">
    <div class="tdetails">
      <div class="tdetails__info">
        <div class="tdetails__top">
          <div class="tdetails__posted">{{ job.postedAt }}</div>
          <div class="tdetails__divider divider"></div>
          <div class="tdetails__contract">{{ job.contract }}</div>
        </div>
        <div class="tdetails__position title-h3">{{ job.position }}</div>
        <div class="tdetails__location location">{{ job.location }}</div>
      </div>
      <ButtonEl title="Apply now" />
    </div>
    <p class="job-details__text">{{ job.description }}</p>
    <h2 class="job-details__title title-h2">Requirements</h2>
    <p class="job-details__text">{{ job.requirements.content }}</p>
    <ol class="job-details__list">
      <li
        class="job-details__list-item"
        v-for="(item, index) in job.requirements.items"
        :key="index"
      >
        {{ item }}
      </li>
    </ol>
    <h2 class="job-details__title title-h2">What You Will Do</h2>
    <p class="job-details__text">{{ job.role.content }}</p>
    <ol class="job-details__list" style="margin-bottom: 0">
      <li
        class="job-details__list-item job-details__list-item_numbers"
        v-for="(item, index) in job.role.items"
        :key="index"
      >
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

.job-details {
  --job-detail-bg: var(--card-bg);
  --padding: 48px;

  padding: var(--padding);
  background: var(--job-detail-bg);
  @media (--mobile-screen) {
    padding: 40px 24px;
    border-radius: var(--radius);
  }
  &__title {
    margin-bottom: 15px;
  }
  &__text {
    margin-bottom: 30px;
    line-height: 1.8;
  }
  &__list {
    line-height: 1.6;
    padding-left: 20px;
    margin-bottom: 60px;
  }
  &__list-item {
    margin-top: 6px;
    list-style-type: circle;
    padding-left: 20px;
  }
  &__list-item_numbers {
    list-style-type: auto;
  }
}

.tdetails {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  margin-bottom: 50px;
  @media (--mobile-screen) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .btn {
      width: 100%;
    }
  }
  &__info {
    @media (--mobile-screen) {
      margin-bottom: 50px;
    }
  }
  &__top {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }
  &__position {
    margin-top: 10px;
  }
  &__location {
    margin-top: 6px;
  }
}
</style>
