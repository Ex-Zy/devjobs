<script setup>
const props = defineProps({
  position: String,
  location: String,
});
</script>

<template>
  <footer class="footer-details">
    <div class="footer-details__in">
      <div class="footer-details__info">
        <div class="footer-details__position title-h3">
          {{ props.position }}
        </div>
        <div class="footer-details__location location">
          {{ props.location }}
        </div>
      </div>
      <ButtonEl title="Apply now" />
    </div>
  </footer>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

.footer-details {
  --footer-bg: var(--card-bg);
  --footer-height: 96px;
  --location-color: var(--button-bg1);

  background: var(--footer-bg);
  position: sticky;
  left: 0;
  bottom: 0;
  right: 0;
  @media (--mobile-screen) {
    border-radius: var(--radius);
  }
  &__in {
    @mixin container-details;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    height: var(--footer-height);
    @media (--mobile-screen) {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
  &__info {
    @media (--mobile-screen) {
      display: none;
    }
  }
}
</style>
