import { reactive, computed } from "vue";
import JobsApi from "@api/jobs.api.js";
import JobsSerives from "@services/jobs.service.js";

export default function useJobs() {
  const state = reactive({
    jobs: [],
    limit: 8,
    error: null,
  });
  const visibleJobs = computed(getVisibleJobs);
  const isVisibleLoadMore = computed(
    () => visibleJobs.value < state.jobs && !state.error
  );

  // Methods
  async function fetchJobs(params) {
    const { type, data, error } = params
      ? await JobsSerives.filter(params)
      : await JobsApi.getAll();

    if (type === "error") {
      return (state.error = error);
    }

    state.error = null;
    state.jobs = data;
  }
  function loadMore() {
    state.limit += 4;
  }
  function getVisibleJobs() {
    if (state.jobs.length < state.limit) {
      return state.jobs;
    }

    return state.jobs.slice(0, state.limit);
  }

  return {
    state,
    visibleJobs,
    isVisibleLoadMore,
    fetchJobs,
    loadMore,
  };
}
