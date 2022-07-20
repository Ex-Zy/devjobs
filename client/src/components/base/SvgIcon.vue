<script setup>
import { computed } from "vue";

const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");

/* icons */
[class*="icon"] {
  fill: var(--icon-color);
}
.icon-search {
  @mixin size 24px, 24px;
}
.icon-location {
  @mixin size 17px, 24px;
}
.icon-search-sm {
  @mixin size 20px, 20px;
  fill: #fff;
}
.icon-moon {
  @mixin size 12px, 12px;
  fill: #fff;
}
.icon-sun {
  @mixin size 20px, 20px;
  fill: #fff;
}
.icon-filter {
  @mixin size 20px, 20px;
  fill: #fff;
}
</style>
