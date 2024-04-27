<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTabbarStore } from "@/store/tabbar";

const { userViewActiveTab } = storeToRefs(useTabbarStore());

const tabItemList = [
  {
    title: "农场中心",
    to: "/user/index/farm",
    iconClassPrefix: "fa-regular fa-farm",
  },
  {
    title: "云闽商城",
    to: "/user/index/shop",
    iconClassPrefix: "fa-regular fa-shop",
  },
  {
    title: "首页",
    to: "/user/index/home",
    iconClassPrefix: "fa-regular fa-house",
  },
  {
    title: "社区交流",
    to: "/user/index/community",
    iconClassPrefix: "fa-regular fa-messages",
  },
  {
    title: "个人中心",
    to: "/user/index/center",
    iconClassPrefix: "fa-regular fa-user",
  },
];
</script>

<template>
  <router-view />
  <van-tabbar v-model="userViewActiveTab" placeholder safe-area-inset-bottom>
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
  </van-tabbar>
</template>

<style scoped lang="scss">
.van-tabbar__placeholder :deep(.van-tabbar) {
  height: auto;
  padding: 0.25rem 0;
}
</style>
