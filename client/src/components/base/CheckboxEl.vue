<script setup>
defineProps({
  checked: { type: Boolean },
});

const emit = defineEmits(["update:checked"]);
const change = (event) => emit("update:checked", event.target.checked);
</script>

<template>
  <label class="gui-checkbox">
    <input type="checkbox" v-bind="{ checked }" v-on="{ change }" />
    <slot>
      <span>{{ title }}</span>
    </slot>
  </label>
</template>

<style lang="postcss">
.gui-checkbox {
  --check-icon: #fff;
  --background-inactive: #e7e8e9;
  --background-active: var(--button-bg1);
  --text-color: var(--title-primary-color);

  display: inline-flex;
  align-items: center;
  gap: 16px;

  & input[type="checkbox"] {
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--background-inactive);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
    transition: background-color 0.25s;

    &:checked {
      background-color: var(--background-active);
    }
  }

  & input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--check-icon);
  }

  & input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  & span {
    font: 700 16rem/1.4 "Kumbh Sans", sans-serif;
    color: var(--text-color);
  }
}
</style>
