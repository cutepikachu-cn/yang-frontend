<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTabbarStore } from "@/store/tabbar";

const { farmViewActiveTab } = storeToRefs(useTabbarStore());

const tabItemList = [
  {
    title: "羊场主工具",
    to: "/farm/toolbox",
    iconClassPrefix: "fa-regular fa-toolbox",
  },
  {
    title: "羊场主中心",
    to: "/farm/center",
    iconClassPrefix: "fa-regular fa-farm",
  },
];
</script>

<template>
  <router-view />
  <van-tabbar v-model="farmViewActiveTab" placeholder safe-area-inset-bottom>
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

<style scoped>
.van-tabbar__placeholder :deep(.van-tabbar) {
  height: auto;
  padding: 0.25rem 0;
}
</style>
