const routes = [
  {
    path: "/",
    component: () => import("@pages/HomePage.vue"),
  },
  {
    path: "/jobs/:id",
    component: () => import("@pages/JobPage.vue"),
  },
  {
    path: "/404",
    component: () => import("@pages/NotFoundPage.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

export { routes };
