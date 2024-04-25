<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTabbarStore } from "@/store/tabbar";

const { active } = storeToRefs(useTabbarStore());

const tabItemList = [
  {
    title: "农场中心",
    to: "/farm",
    iconClassPrefix: "fa-regular fa-farm",
  },
  {
    title: "云闽商城",
    to: "/shop",
    iconClassPrefix: "fa-regular fa-shop",
  },
  {
    title: "首页",
    to: "/home",
    iconClassPrefix: "fa-regular fa-house",
  },
  {
    title: "社区交流",
    to: "/community",
    iconClassPrefix: "fa-regular fa-messages",
  },
  {
    title: "个人中心",
    to: "/user",
    iconClassPrefix: "fa-regular fa-user",
  },
];
</script>

<template>
  <router-view />
  <van-tabbar v-model="active" placeholder safe-area-inset-bottom>
    <van-tabbar-item
      v-for="(item, index) in tabItemList"
      :key="index"
      :to="item.to"
    >
      <template #icon>
        <van-icon :class-prefix="item.iconClassPrefix" class="text-3xl/none" />
      </template>
      {{ item.title }}
    </van-tabbar-item>
    <!--<van-tabbar-item to="/farm">-->
    <!--  <template #icon>-->
    <!--    <van-icon class-prefix="fa-regular fa-farm"/>-->
    <!--  </template>-->
    <!--  农场中心-->
    <!--</van-tabbar-item>-->
    <!--<van-tabbar-item to="/shop">-->
    <!--  <template #icon>-->
    <!--    <van-icon class-prefix="fa-regular fa-shop"/>-->
    <!--  </template>-->
    <!--  云闽商城-->
    <!--</van-tabbar-item>-->
    <!--<van-tabbar-item to="/home">-->
    <!--  <template #icon>-->
    <!--    <van-icon class-prefix="fa-regular fa-house"/>-->
    <!--  </template>-->
    <!--  首页-->
    <!--</van-tabbar-item>-->
    <!--<van-tabbar-item to="/community">-->
    <!--  <template #icon>-->
    <!--    <van-icon class-prefix="fa-regular fa-messages"/>-->
    <!--  </template>-->
    <!--  社区交流-->
    <!--</van-tabbar-item>-->
    <!--<van-tabbar-item to="/user">-->
    <!--  <template #icon>-->
    <!--    <van-icon class-prefix="fa-regular fa-user"/>-->
    <!--  </template>-->
    <!--  个人中心-->
    <!--</van-tabbar-item>-->
  </van-tabbar>
</template>

<style scoped lang="scss">
.van-tabbar__placeholder :deep(.van-tabbar) {
  height: auto;
  padding: 0.25rem 0;
}
</style>
