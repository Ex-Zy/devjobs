<script setup>
import JobDetails from "@details/JobDetails.vue";
import HeaderDetails from "@details/HeaderDetails.vue";
import FooterDetails from "@details/FooterDetails.vue";
import { useJobs } from "@use/useJobs";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const { jobs } = useJobs();
const job = computed(() => jobs.find(({ id }) => id === +route.params.id));
</script>

<template>
  <LoaderBase v-if="!job" style="padding-top: 100px" />
  <template v-else>
    <div class="details-wrp">
      <HeaderDetails
        :company="job.company"
        :website="job.website"
        :logo="job.logo"
        :logoBackground="job.logoBackground"
      />
      <JobDetails :job="job" />
    </div>
    <FooterDetails :position="job.position" :location="job.location" />
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
