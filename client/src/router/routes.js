import HomePage from "@pages/HomePage.vue";
import JobPage from "@pages/JobPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/jobs/:id", component: JobPage },
];

export { routes };
