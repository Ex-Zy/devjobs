<script setup>
import * as logos from "./index";
import { computed } from "vue";

const props = defineProps({
  name: String,
});

const logo = computed(() => logos[props.name]);
</script>

<template>
  <component :is="logo" />
</template>
