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
        <LogoSvg name="logo" />
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
  background: url("../assets/backgrounds/bg-pattern-header.svg") no-repeat top
    center;
  background-size: 100% 100%;
  &__in {
    @mixin container;
    @mixin flex-justify-center;
  }
}
</style>
