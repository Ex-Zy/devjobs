<script setup>
import { useDark } from "@vueuse/core";

const isDark = useDark({
  valueDark: "dark",
  valueLight: "light",
});
</script>

<template>
  <header class="app-header">
    <div class="app-header__in">
      <router-link to="/">
        <h1 class="app-header__title">Devjobs<LogoSvg name="logo" /></h1>
      </router-link>
      <SwitchEl v-model:checked="isDark" />
    </div>
  </header>
</template>

<style lang="postcss">
@import url("../styles/mixins.pcss");
@import url("../styles/media.pcss");

.app-header {
  height: 160px;
  padding: 44px 0;
  background: url("../assets/backgrounds/bg-pattern-header.svg") no-repeat
    bottom left;
  background-size: cover;
  &__in {
    @mixin container;
    @mixin flex-justify-center;
  }
  &__title {
    font-size: 0;
    line-height: 0;
  }
}
</style>
