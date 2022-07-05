<script setup>
import { onMounted } from "vue";
import HeaderApp from "./components/HeaderApp.vue";

onMounted(() => {
  document.documentElement.setAttribute("data-theme", "light");
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
body,
#app,
.jobs,
.jobs__in {
  height: 100%;
}

body {
  background-color: var(--page-bg);
  color: var(--text-color);
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
