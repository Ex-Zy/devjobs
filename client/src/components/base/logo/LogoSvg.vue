<script setup>
import * as logos from "./index";
import { computed } from "vue";

// Props
const props = defineProps({
  name: String,
});

// Data
const logo = computed(() => logos[props.name]);
</script>

<template>
  <component :is="logo" />
</template>
