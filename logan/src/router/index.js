import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/helloworld",
      name: "helloworld",
      component: () => import("../components/HelloWorld.vue"),
    },
    {
      path: "/count",
      name: "count",
      component: () => import("../views/CountView.vue"),
    },
    {
      path: "/cover",
      name: "cover",
      component: () => import("../views/CoverView.vue"),
    }
  ],
});

export default router;
