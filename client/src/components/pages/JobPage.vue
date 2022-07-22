<script setup>
import JobDetails from "@details/JobDetails.vue";
import HeaderDetails from "@details/HeaderDetails.vue";
import FooterDetails from "@details/FooterDetails.vue";
import JobsApi from "@api/jobs.api.js";
import { useRoute } from "vue-router";
import { computed, reactive, onMounted } from "vue";

// Data
const route = useRoute();
const state = reactive({
  job: null,
  error: null,
});
const id = computed(() => +route.params.id);

// Hooks
onMounted(fetchJob);

// Methods
async function fetchJob() {
  const { type, data, error } = await JobsApi.getById(id.value);

  if (type === "error") {
    return (state.error = error);
  }

  state.job = data;
}
</script>

<template>
  <div v-if="state.error" class="error-msg title-h1" style="margin-top: 100px">
    {{ state.error }}
  </div>
  <LoaderBase v-else-if="!state.job" style="padding-top: 100px" />
  <template v-else>
    <div class="details-wrp">
      <HeaderDetails
        :company="state.job.company"
        :website="state.job.website"
        :logo="state.job.logo"
        :logoBackground="state.job.logoBackground"
      />
      <JobDetails :job="state.job" />
    </div>
    <FooterDetails
      :position="state.job.position"
      :location="state.job.location"
    />
  </template>
</template>

<style lang="postcss">
@import url("@styles/mixins.pcss");
@import url("@styles/media.pcss");

.details-wrp {
  @mixin container-details;
  margin-top: -40px;
  flex-grow: 1;
  padding-bottom: 100px;
}
</style>
