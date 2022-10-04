import JobsApi from "@api/jobs.api.js";
import { useRoute } from "vue-router";
import { computed, reactive } from "vue";

export default function useOneJob() {
  const route = useRoute();
  const state = reactive({
    job: null,
    error: null,
  });
  const id = computed(() => +route.params.id);

  async function fetchJob() {
    const { type, data, error } = await JobsApi.getById(id.value);

    if (type === "error") {
      return (state.error = error);
    }

    state.job = data;
  }

  return {
    state,
    id,
    fetchJob,
  };
}
