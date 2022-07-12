<script setup>
defineProps({
  type: {
    type: String,
    default: "primary",
    validator: (val) => ["primary", "secondary"].includes(val),
  },
  title: { type: String, default: "Default" },
});
const emit = defineEmits(["click"]);
const click = () => emit("click");
</script>

<template>
  <button type="button" class="btn" :class="`btn-${type}`" v-on="{ click }">
    <slot>{{ title }}</slot>
  </button>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

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
  text-overflow: ellipsis;
  &:active {
    top: 1px;
  }

  @media (--tablet-screen) {
    --padding: 15px;
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
</style>
