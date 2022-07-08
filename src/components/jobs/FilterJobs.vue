<script setup>
import { reactive } from "vue";
import FilterModel from "@models/filter.model";

const filter = reactive(new FilterModel());
</script>

<template>
  <div class="filter">
    <div class="filter__row">
      <InputEl
        v-model:value.trim="filter.keyWord"
        class="filter-radius"
        iconName="search"
        placeholder="Filter by title, companies, expertise…"
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
        <CheckboxEl
          v-model:checked="filter.isFulltime"
          title="Full Time Only"
        />
        <ButtonEl title="Search" />
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
