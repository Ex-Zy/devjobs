import { reactive, computed } from "vue";

export default function useInputUIState() {
  const ui = reactive({
    isHovered: false,
    isFocused: false,
  });

  const uiClasses = computed(() => ({
    "is-focused": ui.isFocused,
    "is-hovered": ui.isHovered && !ui.isFocused,
  }));

  const focus = () => (ui.isFocused = true);
  const blur = () => (ui.isFocused = false);
  const mouseover = () => (ui.isHovered = true);
  const mouseleave = () => (ui.isHovered = false);

  return { ui, uiClasses, focus, blur, mouseover, mouseleave };
}
