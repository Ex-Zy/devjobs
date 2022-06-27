<script setup>
import { ref, defineProps, computed } from "vue";
import IconSearch from "../../assets/icons/icon-search.svg";
import IconLocation from "../../assets/icons/icon-location.svg";
import useInputUIState from "../../use/useInputUIState";

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

const { uiClasses, focus, blur, mouseover, mouseleave } = useInputUIState();
</script>

<template>
  <div class="gui-input" :class="uiClasses" v-on="{ mouseover, mouseleave }">
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
  --bg-color: var(--card-bg);
  --placeholder: var(--text-color);
  --color: var(--title-primary-color);
  --border-color: var(--button-bg1-hover);

  --gap: 16px;
  --radius: 6px;
  --height: 80px;

  display: inline-flex;
  gap: var(--gap);
  padding: 0 15px 0 30px;
  height: var(--height);

  background: var(--bg-color);
  border-radius: var(--radius);
  border: 2px solid transparent;

  &__field {
    background-color: transparent;
    color: var(--color);
    font: 400 16rem/1.4 "Kumbh Sans", sans-serif;
    border: 0;
    outline: none;
    transition: all 0.25s;
    &::placeholder {
      color: var(--placeholder);
    }
  }

  &__icon {
    align-self: center;
    cursor: pointer;
    outline: none;
    border: none;
  }

  &.is-focused {
    border-color: var(--button-bg1-hover);
  }
  &.is-hovered {
    border-color: var(--button-bg2-hover);
  }
}
</style>
