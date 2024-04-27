import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import UserViewTabbarLayout from "@/layouts/UserViewTabbarLayout.vue";
import UserIndexView from "@/views/UserViews/UserIndexView.vue";
import FarmViewTabbarLayout from "@/layouts/FarmViewTabbarLayout.vue";
import FarmIndexView from "@/views/FarmerViews/FarmIndexView.vue";
import BasicPageLayout from "@/layouts/BasicPageLayout.vue";

import HomeView from "@/views/UserViews/Home/HomeView.vue";
import FarmView from "@/views/UserViews/Farm/FarmView.vue";
import ShopView from "@/views/UserViews/Shop/ShopView.vue";
import CommunityView from "@/views/UserViews/Community/CommunityView.vue";
import UserCenterView from "@/views/UserViews/Center/CenterView.vue";
import UserInfoView from "@/views/UserViews/Center/UserInfoView.vue";

import FarmCenterView from "@/views/FarmerViews/Center/CenterView.vue";
import CommodityListView from "@/views/FarmerViews/Commodity/CommodityListView.vue";
import CommodityAddView from "@/views/FarmerViews/Commodity/CommodityAddView.vue";

import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AboutView from "@/views/UserViews/About/AboutView.vue";
import MonitorView from "@/views/UserViews/Monitor/MonitorView.vue";
import AssistantView from "@/views/UserViews/Assistant/AssistantView.vue";
import CourseTypeListView from "@/views/UserViews/Course/CourseTypeListView.vue";
import CourseListView from "@/views/UserViews/Course/CourseListView.vue";
import CommodityDetailView from "@/views/CommodityDetailView.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "", redirect: "/user/index/home" },
  // 用户版路由
  {
    path: "/user",
    component: UserIndexView,
    children: [
      { path: "", redirect: "/user/index/home" },
      {
        path: "index",
        component: UserViewTabbarLayout,
        children: [
          { path: "", redirect: "/user/index/home" },
          { path: "home", component: HomeView, meta: { title: "首页" } },
          { path: "farm", component: FarmView, meta: { title: "农场中心" } },
          { path: "shop", component: ShopView, meta: { title: "云闽商城" } },
          {
            path: "community",
            component: CommunityView,
            meta: { title: "社区交流" },
          },
          {
            path: "center",
            component: UserCenterView,
            meta: {
              title: "小金主个人中心",
            },
          },
        ],
      },
      {
        path: "self",
        component: BasicPageLayout,
        children: [
          {
            path: "info",
            component: UserInfoView,
            meta: {
              title: "用户信息",
            },
          },
        ],
      },
    ],
  },
  // 羊场主版路由
  {
    path: "/farm",
    component: FarmIndexView,
    children: [
      { path: "", redirect: "/farm/index/center" },
      {
        path: "index",
        component: FarmViewTabbarLayout,
        children: [
          { path: "", redirect: "/farm/index/center" },
          {
            path: "center",
            component: FarmCenterView,
            meta: { title: "羊场主中心" },
          },
        ],
      },
      {
        path: "commodity",
        component: BasicPageLayout,
        children: [
          {
            path: "manage",
            component: CommodityListView,
            meta: { title: "商品管理" },
          },
          {
            path: "add",
            component: CommodityAddView,
            meta: { title: "添加商品" },
          },
        ],
      },
    ],
  },
  // 其它页面路由
  {
    path: "/",
    component: BasicPageLayout,
    children: [
      { path: "", redirect: "/user/index/home" },
      { path: "about", component: AboutView, meta: { title: "关于" } },
      { path: "monitor", component: MonitorView, meta: { title: "数据监控" } },
      {
        path: "assistant",
        component: AssistantView,
        meta: { title: "智能问答" },
      },
      {
        path: "course",
        component: CourseTypeListView,
        meta: { title: "课程分类列表" },
      },
      {
        path: "course/:courseTypeId",
        component: CourseListView,
        meta: { title: "课程列表" },
      },
      {
        path: "commodity/:commodityId",
        component: CommodityDetailView,
        meta: { title: "商品详情" },
      },
    ],
  },
  {
    path: "/login",
    component: LoginView,
    meta: { title: "登录" },
  },
  {
    path: "/register",
    component: RegisterView,
    meta: { title: "注册" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
