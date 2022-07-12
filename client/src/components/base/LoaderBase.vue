<template>
  <h3 class="loader title-h3">Loading...</h3>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

.loader {
  @mixin container;
  text-align: center;
}
</style>