<script setup>
import { reactive, defineEmits } from "vue";
import FilterModel from "@models/filter.model.js";
import { MqResponsive } from "vue3-mq";

const filter = reactive(new FilterModel());
const emit = defineEmits(["update:filter"]);
const handleClickOnSearchButton = () => emit("update:filter", filter);
</script>

<template>
  <div class="filter">
    <div class="filter__row">
      <InputEl
        v-model:value.trim="filter.position"
        class="filter-radius"
        iconName="search"
        placeholder="Filter by position"
      />
      <div class="filter__divider"></div>
      <InputEl
        v-model:value.trim="filter.location"
        class="filter-radius"
        iconName="location"
        placeholder="Filter by location…"
      />
      <div class="filter__divider"></div>
      <div class="filter__fulltime">
        <MqResponsive target="desktop">
          <CheckboxEl
            v-model:checked="filter.isFulltime"
            title="Full Time Only"
          />
        </MqResponsive>
        <MqResponsive :target="['mobile', 'tablet']">
          <CheckboxEl v-model:checked="filter.isFulltime" title="Full Time" />
        </MqResponsive>

        <ButtonEl title="Search" @click="handleClickOnSearchButton" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

.filter {
  --divider: var(--text-color);
  --filter-top-margin: calc(var(--filter-height) / 2 * -1);
  --filter-bottom-margin: calc(var(--filter-height) / 4 + var(--filter-height));
  --filter-bg: var(--card-bg);

  @mixin container;
  margin-top: var(--filter-top-margin);
  margin-bottom: var(--filter-bottom-margin);

  &__row {
    display: grid;
    grid-template-columns: 1.5fr 1px 1fr 1px auto;
    background-color: var(--filter-bg);
    border-radius: var(--radius);
    @media (--desktop-screen) {
      grid-template-columns: 1fr 1px 1fr 1px auto;
    }
  }
  &__divider {
    background-color: var(--divider);
  }
  &__fulltime {
    display: grid;
    align-items: center;
    justify-content: flex-start;
    grid-template-columns: auto auto;
    gap: 26px;
    padding: 0 15px 0 30px;
    @media (--tablet-screen) {
      padding: 0 14px 0 20px;
    }
  }
  & .filter-radius:nth-of-type(1) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & .filter-radius:nth-of-type(3) {
    border-radius: 0;
  }
}
</style>
