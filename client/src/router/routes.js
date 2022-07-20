import HomePage from "@pages/HomePage.vue";
import JobPage from "@pages/JobPage.vue";
import NotFoundPage from "@pages/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/jobs/:id", component: JobPage },
  { path: "/404", component: NotFoundPage },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

export { routes };
