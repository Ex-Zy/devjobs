<script setup>
import JobDetails from "@details/JobDetails.vue";
import HeaderDetails from "@details/HeaderDetails.vue";
import FooterDetails from "@details/FooterDetails.vue";
import { onMounted } from "vue";
import useOneJob from "@use/useOneJob";

const { state, fetchJob } = useOneJob();
onMounted(fetchJob);
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
