const routes = [
  {
    path: "/",
    component: () => import("layouts/SplashLayout.vue"),
    children: [{ path: "", component: () => import("pages/SplashPage.vue") }],
  },
  {
    path: "/entry-page",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/thank-you",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ThankYou.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
