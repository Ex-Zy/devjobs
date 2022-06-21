import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Jobs from "../pages/Jobs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/jobs", component: Jobs },
  ],
});

export default router;
