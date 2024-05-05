<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTabbarStore } from "@/store/tabbar";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const { userViewActiveTab } = storeToRefs(useTabbarStore());

const route = useRoute();

onMounted(() => {
  const activeTab = items.findIndex((item) => item.to === route.path);
  if (activeTab !== -1) {
    userViewActiveTab.value = activeTab;
  }
});

const items = [
  {
    title: "农场中心",
    to: "/user/farm",
    icon: "fa-farm",
    iconClassPrefix: "fa-regular fa-farm",
  },
  {
    title: "云闽商城",
    to: "/user/shop",
    icon: "fa-shop",
    iconClassPrefix: "fa-regular fa-shop",
  },
  {
    title: "首页",
    to: "/user/home",
    icon: "fa-house",
    iconClassPrefix: "fa-regular fa-house",
  },
  {
    title: "社区交流",
    to: "/user/community",
    icon: "fa-messages",
    iconClassPrefix: "fa-regular fa-messages",
  },
  {
    title: "个人中心",
    to: "/user/center",
    icon: "fa-user",
    iconClassPrefix: "fa-regular fa-user",
  },
];

const tabItemList = computed(() => {
  items.map((item, index) => {
    item.iconClassPrefix =
      (index === userViewActiveTab.value ? "fa-duotone" : "fa-regular") +
      " " +
      item.icon;
  });
  return items;
});
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
