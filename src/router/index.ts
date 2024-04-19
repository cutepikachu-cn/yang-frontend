import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout.vue";
import Home from "@/views/Home/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "", redirect: "/home" },
  {
    path: "/",
    component: BasicLayout,
    children: [
      { path: "home", component: Home, meta: { title: "首页" } },
      { path: "", redirect: "/" },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
