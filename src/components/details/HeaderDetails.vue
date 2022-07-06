<script setup>
import { getImageUrl } from "@helpers";
const props = defineProps({
  company: String,
  logo: String,
  website: String,
  logoBackground: String,
});

function getUrlHostName(websiteUrl) {
  if (!websiteUrl.trim().length) return "";

  return new URL(websiteUrl).hostname;
}
</script>

<template>
  <div class="header-details">
    <div class="header-details__logo" :style="{ background: logoBackground }">
      <img :src="getImageUrl(logo)" :alt="`Company ${company} logo`" />
    </div>
    <div class="header-details__description">
      <div class="header-details__info">
        <div class="header-details__company title-h2">{{ props.company }}</div>
        <div class="header-details__website">
          {{ getUrlHostName(props.website) }}
        </div>
      </div>
      <ButtonEl type="secondary" title="Company site" />
    </div>
  </div>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

.header-details {
  --header-bg: var(--card-bg);
  --header-height: 140px;
  --padding: 40px;

  background: var(--header-bg);
  display: grid;
  grid-template-columns: var(--header-height) 1fr;
  height: var(--header-height);
  margin-bottom: 30px;
  &__logo {
    display: grid;
    place-content: center;
    img {
      transform: scale(2);
    }
  }
  &__description {
    padding: calc(var(--padding) / 2) var(--padding);
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }
}
</style>
