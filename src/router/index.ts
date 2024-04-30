import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import UserViewTabbarLayout from "@/layouts/UserViewTabbarLayout.vue";
import UserIndexView from "@/views/UserViews/UserIndexView.vue";
import FarmViewTabbarLayout from "@/layouts/FarmViewTabbarLayout.vue";
import FarmIndexView from "@/views/FarmerViews/FarmIndexView.vue";
import BasicPageLayout from "@/layouts/BasicPageLayout.vue";

import HomeView from "@/views/UserViews/Home/HomeView.vue";
import FarmView from "@/views/UserViews/Farm/FarmView.vue";
import ShopView from "@/views/UserViews/Shop/ShopView.vue";
import UserCommunityView from "@/views/UserViews/Community/UserCommunityView.vue";
import UserCenterView from "@/views/UserViews/Center/CenterView.vue";
import UserInfoView from "@/views/UserViews/Center/UserInfoView.vue";
import UserOrderListView from "@/views/UserViews/Order/UserOrderListView.vue";

import FarmCenterView from "@/views/FarmerViews/Center/CenterView.vue";
import InfoView from "@/views/FarmerViews/Center/InfoView.vue";
import CommodityListView from "@/views/FarmerViews/Commodity/CommodityListView.vue";
import CommodityAddView from "@/views/FarmerViews/Commodity/CommodityAddView.vue";
import FarmOrderListView from "@/views/FarmerViews/Order/FarmOrderListView.vue";
import MonitorView from "@/views/FarmerViews/Monitor/MonitorView.vue";
import ToolboxView from "@/views/FarmerViews/ToolBox/ToolboxView.vue";
import FarmCommunityView from "@/views/FarmerViews/Community/FarmCommunityView.vue";

import LoginView from "@/views/LoginView.vue";
import UserRegisterView from "@/views/UserRegisterView.vue";
import FarmRegisterView from "@/views/FarmRegisterView.vue";
import AboutView from "@/views/About/AboutView.vue";
import AssistantView from "@/views/Assistant/AssistantView.vue";
import CourseTypeListView from "@/views/Course/CourseTypeListView.vue";
import CourseListView from "@/views/Course/CourseListView.vue";
import CommodityDetailView from "@/views/CommodityDetailView.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "", redirect: "/user/home" },
  // 用户版路由
  {
    path: "/user",
    component: UserIndexView,
    children: [
      { path: "", redirect: "/user/home" },
      {
        path: "",
        component: UserViewTabbarLayout,
        children: [
          { path: "", redirect: "/user/home" },
          { path: "home", component: HomeView, meta: { title: "首页" } },
          { path: "farm", component: FarmView, meta: { title: "农场中心" } },
          { path: "shop", component: ShopView, meta: { title: "云闽商城" } },
          {
            path: "community",
            component: UserCommunityView,
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
        path: "",
        component: BasicPageLayout,
        children: [
          {
            path: "self",
            component: UserInfoView,
            meta: { title: "用户信息" },
          },
          {
            path: "order/manage",
            component: UserOrderListView,
            meta: { title: "我的订单" },
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
      { path: "", redirect: "/farm/center" },
      {
        path: "",
        component: FarmViewTabbarLayout,
        children: [
          { path: "", redirect: "/farm/center" },
          {
            path: "center",
            component: FarmCenterView,
            meta: { title: "羊场主中心" },
          },
          {
            path: "toolbox",
            component: ToolboxView,
            meta: { title: "羊场主工具" },
          },
          {
            path: "community",
            component: FarmCommunityView,
            meta: { title: "社区交流" },
          },
        ],
      },
      {
        path: "",
        component: BasicPageLayout,
        children: [
          {
            path: "self",
            component: InfoView,
            meta: { title: "羊场主信息" },
          },
          {
            path: "monitor",
            component: MonitorView,
            meta: { title: "数据监控" },
          },
          {
            path: "commodity/manage",
            component: CommodityListView,
            meta: { title: "商品管理" },
          },
          {
            path: "commodity/add",
            component: CommodityAddView,
            meta: { title: "添加商品" },
          },
          {
            path: "order/manage",
            component: FarmOrderListView,
            meta: { title: "订单管理" },
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
      { path: "", redirect: "/user/home" },
      { path: "about", component: AboutView, meta: { title: "关于" } },
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
    path: "/farm/register",
    component: FarmRegisterView,
    meta: { title: "羊场主注册（入驻）" },
  },
  {
    path: "/user/register",
    component: UserRegisterView,
    meta: { title: "小金主注册" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
