<script setup>
import useModal from "@use/useModal.js";
import { reactive } from "vue";

// Data
const filter = reactive({
  isFulltime: false,
  location: "",
});
const { isOpenModal } = useModal();

// Events
const emit = defineEmits(["update:filter"]);

// Methods
const handleFilter = (filterData) => {
  const eventData = filterData ? Object.assign(filter, filterData) : filter;

  emit("update:filter", eventData);
};
</script>

<template>
  <div class="filter__fulltime-icon-filter" @click="isOpenModal = true">
    <SvgIcon name="filter" class="icon-filter" />
  </div>
  <teleport to="body">
    <div v-if="isOpenModal" class="modal">
      <div class="modal__backdrop" @click="isOpenModal = false"></div>
      <div class="mblock">
        <div class="mblock__top">
          <InputEl
            v-model:value.trim="filter.location"
            class="modal-location"
            iconName="location"
            placeholder="Filter by location…"
            @enter="handleFilter"
            @clear="handleFilter({ location: '' })"
          />
        </div>
        <div class="mblock__divider"></div>
        <div class="mblock__body">
          <CheckboxEl v-model:checked="filter.isFulltime">
            <span>Full Time Only</span>
          </CheckboxEl>
          <ButtonEl @click="handleFilter" class="mblock__btn">
            <span>Search</span>
          </ButtonEl>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

.modal {
  @mixin fullsizediv;
  z-index: 10;
  display: flex;
  justify-content: center;
  &__backdrop {
    @mixin fullsizediv;
    background-color: #000;
    opacity: 0.6;
  }
  & .modal-location {
    border-radius: 0;
  }
}

.mblock {
  --divider: #e2e6ea;

  width: 328px;
  position: absolute;
  top: 20%;
  background: var(--card-bg);
  border-radius: var(--radius);
  &__divider {
    border-top: 1px solid var(--divider);
    [class="dark"] & {
      --divider: #2a3342;
    }
  }
  &__body {
    padding: 24px;
    display: flex;
    flex-direction: column;
  }
  &__btn {
    margin-top: 24px;
  }
}
</style>
