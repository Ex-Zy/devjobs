<script setup>
import { onMounted } from "vue";
import HeaderApp from "./components/HeaderApp.vue";

onMounted(() => {
  document.documentElement.setAttribute("data-theme", "dark");
});
</script>

<template>
  <HeaderApp />
  <router-view></router-view>
</template>

<style lang="postcss">
@import "@node_modules/normalize.css";
@import "@styles/reset.local.pcss";
@import "@styles/theme.pcss";
@import "@styles/typography.pcss";

:root {
  --filter-height: 80px;
  --radius: 6px;
}

html,
body {
  height: 100%;
}

body {
  background-color: var(--page-bg);
  color: var(--text-color);
}
</style>
