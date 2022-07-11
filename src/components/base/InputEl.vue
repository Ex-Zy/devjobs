<script setup>
import useInput from "@use/useInput.js";
import useIcon from "@use/useIcon.js";

const props = defineProps({
  value: String,
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "Initial placeholder" },
  iconName: { type: String, default: "search" },
});
const emit = defineEmits(["update:value"]);
const { icon } = useIcon(props.iconName);
const { classes, focus, blur, mouseover, mouseleave } = useInput();
const input = (event) => emit("update:value", event.target.value);
</script>

<template>
  <div class="gui-input" :class="classes" v-on="{ mouseover, mouseleave }">
    <Component
      v-if="icon"
      :is="icon"
      class="gui-input__icon"
      v-on="{ focus, blur }"
    />
    <input
      class="gui-input__field"
      v-bind="{ value, type, placeholder }"
      v-on="{ focus, blur, input }"
    />
  </div>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

.gui-input {
  --bg-color: var(--card-bg);
  --placeholder: var(--text-color);
  --color: var(--title-primary-color);
  --border-color: var(--button-bg1-hover);

  --gap: 16px;
  --radius: 6px;
  --height: var(--filter-height);
  --border-width: 1px;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--gap);
  padding: 0 15px 0 30px;
  height: var(--height);

  background: var(--bg-color);
  border-radius: var(--radius);
  border: var(--border-width) solid transparent;

  @media (--tablet-screen) {
    padding: 0 14px 0 24px;
  }

  &__field {
    width: 100%;
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
