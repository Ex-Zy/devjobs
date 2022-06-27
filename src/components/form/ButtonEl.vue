<script setup>
import { defineProps } from "vue";
defineProps({
  type: {
    type: String,
    default: "primary",
    validator: (val) => ["primary", "secondary"].includes(val),
  },
  title: { type: String, default: "Default" },
});
</script>

<template>
  <button type="button" class="btn" :class="`btn-${type}`">
    <slot>{{ title }}</slot>
  </button>
</template>

<style lang="postcss">
.btn {
  --padding: 30px;
  --color: #fff;
  --height: 48px;

  display: inline-block;
  height: var(--height);
  position: relative;
  text-align: center;
  padding: 0 var(--padding);
  color: var(--color);
  border-radius: var(--radius);
  font: 700 16rem/1.2 "Kumbh Sans", sans-serif;
  cursor: pointer;
  transition: background-color 0.25s;
  &:active {
    top: 1px;
  }
}

.btn-primary {
  background-color: var(--button-bg1);
  &:hover {
    background-color: var(--button-bg1-hover);
  }
}

.btn-secondary {
  background-color: var(--button-bg2);
  &:hover {
    background-color: var(--button-bg2-hover);
  }
}

[data-theme="light"] {
  & .btn-secondary {
    color: var(--button-bg1);
  }
}
</style>
