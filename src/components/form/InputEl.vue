<script setup>
import { ref, defineProps, computed, reactive } from "vue";
import IconSearch from "../../assets/icons/icon-search.svg";
import IconLocation from "../../assets/icons/icon-location.svg";

const props = defineProps({
  value: String,
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "Initial placeholder" },
  iconName: { type: String, default: "search" },
});

const icons = {
  search: IconSearch,
  location: IconLocation,
};
const icon = computed(() => icons[props.iconName] || null);

const state = reactive({
  isHovered: false,
  isFocused: false,
});
const focus = () => (state.isFocused = true);
const blur = () => (state.isFocused = false);
const mouseover = () => (state.isHovered = true);
const mouseleave = () => (state.isHovered = false);
const rootClasses = computed(() => ({
  "is-focused": state.isFocused,
  "is-hovered": state.isHovered && !state.isFocused,
}));
</script>

<template>
  <div class="gui-input" :class="rootClasses" v-on="{ mouseover, mouseleave }">
    <Component
      v-if="icon"
      :is="icon"
      class="gui-input__icon"
      v-on="{ focus, blur }"
    />
    <input
      ref="input"
      class="gui-input__field"
      v-bind="{ type, placeholder }"
      v-on="{ focus, blur }"
    />
  </div>
</template>

<style lang="postcss">
.gui-input {
  display: inline-flex;
  gap: 16px;
  padding: 0 15px 0 30px;
  height: 80px;

  background: #fff;
  border-radius: 6px;
  border: 2px solid transparent;

  &__field {
    color: #19202d;
    font: 400 16rem/1.4 "Kumbh Sans", sans-serif;
    /* border: 0; */
    /* outline: none; */
  }

  &__icon {
    align-self: center;
    cursor: pointer;
  }

  &.is-focused {
    border-color: blue;
  }
  &.is-hovered {
    border-color: black;
  }
}
</style>
