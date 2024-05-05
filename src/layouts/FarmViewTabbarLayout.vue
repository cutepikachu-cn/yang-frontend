<script setup lang="ts">
import { computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTabbarStore } from "@/store/tabbar";
import { useRoute } from "vue-router";

const { farmViewActiveTab } = storeToRefs(useTabbarStore());

const route = useRoute();

onMounted(() => {
  const activeTab = items.findIndex((item) => item.to === route.path);
  if (activeTab !== -1) {
    farmViewActiveTab.value = activeTab;
  }
});

const items = [
  {
    index: 0,
    title: "羊场主工具",
    to: "/farm/toolbox",
    icon: `fa-toolbox`,
    iconClassPrefix: "fa-regular fa-toolbox",
  },
  {
    index: 1,
    title: "社区交流",
    to: "/farm/community",
    icon: "fa-messages",
    iconClassPrefix: "fa-regular fa-messages",
  },
  {
    index: 2,
    title: "羊场主中心",
    to: "/farm/center",
    icon: "fa-farm",
    iconClassPrefix: "fa-regular fa-farm",
  },
];

const tabItemList = computed(() => {
  items.map((item, index) => {
    item.iconClassPrefix =
      (index === farmViewActiveTab.value ? "fa-duotone" : "fa-regular") +
      " " +
      item.icon;
  });
  return items;
});
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
