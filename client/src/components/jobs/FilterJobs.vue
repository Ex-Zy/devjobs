<script setup>
import { reactive } from "vue";
import FilterModel from "@models/filter.model.js";
import SvgIcon from "@base/SvgIcon.vue";

const filter = reactive(new FilterModel());
const emit = defineEmits(["update:filter"]);
const handleClickOnSearchButton = () => emit("update:filter", filter);
</script>

<template>
  <div class="filter">
    <div class="filter__row">
      <InputEl
        v-model:value.trim="filter.position"
        class="filter-position filter-radius"
        iconName="search"
        placeholder="Filter by position"
      />
      <div class="filter__divider"></div>
      <InputEl
        v-model:value.trim="filter.location"
        class="filter-location filter-radius"
        iconName="location"
        placeholder="Filter by location…"
      />
      <div class="filter__divider"></div>
      <div class="filter__fulltime">
        <CheckboxEl v-model:checked="filter.isFulltime">
          <span class="filter__fulltime-title">
            Full Time <span>Only</span>
          </span>
        </CheckboxEl>
        <div class="filter__fulltime-icon-filter">
          <SvgIcon name="filter" class="icon-filter" />
        </div>
        <ButtonEl
          class="filter__fulltime-search"
          @click="handleClickOnSearchButton"
        >
          <span>Search</span>
          <SvgIcon name="search" class="icon-search" />
        </ButtonEl>
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
    @media (--mobile-screen) {
      grid-template-columns: 1fr auto auto;
    }
  }
  &__divider {
    background-color: var(--divider);
    @media (--mobile-screen) {
      display: none;
    }
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
    &-title,
    &-search {
      span {
        @media (--mobile-screen) {
          display: none;
        }
      }
    }
    &-search {
      display: inline-flex;
      align-items: center;
      .icon-search {
        display: none;
        fill: #fff;
        @media (--mobile-screen) {
          display: block;
        }
      }
    }
    &-icon-filter {
      display: none;
      cursor: pointer;
      line-height: 1;
      .icon-filter {
        fill: var(--text-color);
      }
      @media (--mobile-screen) {
        display: block;
      }
    }
    .gui-checkbox {
      @media (--mobile-screen) {
        display: none;
      }
    }
  }
  & .filter-radius:nth-of-type(1) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & .filter-radius:nth-of-type(3) {
    border-radius: 0;
  }
  & .filter-location {
    @media (--mobile-screen) {
      display: none;
    }
  }
}
</style>