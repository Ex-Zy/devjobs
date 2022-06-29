import { computed } from "vue";
import IconSearch from "@assets/icons/icon-search.svg";
import IconLocation from "@assets/icons/icon-location.svg";

export default function useIcon(iconName) {
  const icons = {
    search: IconSearch,
    location: IconLocation,
  };

  const icon = computed(() => icons[iconName] || null);

  return { icon };
}
