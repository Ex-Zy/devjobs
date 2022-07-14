<script setup>
import HeaderApp from "./components/HeaderApp.vue";
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
  --divider-size: 4px;
  --icon-color: var(--button-bg1);
}

body {
  background-color: var(--page-bg);
  color: var(--text-color);
  &.is-lock-scroll {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.location {
  margin-top: auto;
  font-size: 14rem;
  font-weight: 700;
  color: var(--location-color);
}
.divider {
  border-radius: 50%;
  width: var(--divider-size);
  height: var(--divider-size);
  background: var(--text-color);
}
/* icons */
[class*="icon"] {
  fill: var(--icon-color);
}
.icon-search {
  width: 24px;
  height: 24px;
}
.icon-location {
  width: 17px;
  height: 24px;
}
.icon-search {
  width: 20px;
  height: 20px;
}
.icon-moon {
  width: 12px;
  height: 12px;
  fill: #fff;
}
.icon-sun {
  width: 20px;
  height: 20px;
  fill: #fff;
}
.icon-filter {
  width: 20px;
  height: 20px;
  fill: #fff;
}
</style>
