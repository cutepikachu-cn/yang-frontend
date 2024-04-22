import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import BasicLayout from "@/layouts/BasicLayout.vue";
import HomeView from "@/views/Home/HomeView.vue";
import FarmView from "@/views/Farm/FarmView.vue";
import ShopView from "@/views/Shop/ShopView.vue";
import CommunityView from "@/views/Community/CommunityView.vue";
import UserView from "@/views/User/UserView.vue";
import PageLayout from "@/layouts/PageLayout.vue";
import AboutView from "@/views/About/AboutView.vue";
import MonitorView from "@/views/Monitor/MonitorView.vue";
import AssistantView from "@/views/Assistant/AssistantView.vue";
import CourseView from "@/views/Course/CourseView.vue";
import UserLoginView from "@/views/User/UserLoginView.vue";
import CommodityView from "@/views/Commodity/CommodityView.vue";
import CommodityManageView from "@/views/Commodity/CommodityListView.vue";
import CommodityAddView from "@/views/Commodity/CommodityAddView.vue";
import UserInfoView from "@/views/User/UserInfoView.vue";
import UserRegisterView from "@/views/User/UserRegisterView.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "", redirect: "/home" },
  {
    path: "/",
    component: BasicLayout,
    children: [
      { path: "home", component: HomeView, meta: { title: "首页" } },
      { path: "farm", component: FarmView, meta: { title: "农场中心" } },
      { path: "shop", component: ShopView, meta: { title: "云闽商城" } },
      {
        path: "community",
        component: CommunityView,
        meta: { title: "社区交流" },
      },
      { path: "user", component: UserView, meta: { title: "个人中心" } },
      { path: "", redirect: "/" },
    ],
  },
  {
    path: "/",
    component: PageLayout,
    children: [
      { path: "about", component: AboutView, meta: { title: "关于" } },
      { path: "monitor", component: MonitorView, meta: { title: "数据监控" } },
      {
        path: "assistant",
        component: AssistantView,
        meta: { title: "智能问答" },
      },
      { path: "course", component: CourseView, meta: { title: "课程" } },
      {
        path: "commodity",
        component: CommodityView,
        children: [
          {
            path: "list",
            component: CommodityManageView,
            meta: { title: "商品管理" },
          },
          {
            path: "add",
            component: CommodityAddView,
            meta: { title: "添加商品" },
          },
        ],
      },
      {
        path: "self",
        component: UserInfoView,
        meta: { title: "用户信息" },
      },
      {
        path: "register",
        component: UserRegisterView,
        meta: { title: "注册" },
      },
      { path: "", redirect: "/" },
    ],
  },
  {
    path: "/login",
    component: UserLoginView,
    meta: { title: "登录" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
