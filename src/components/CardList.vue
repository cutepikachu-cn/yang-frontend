<script setup lang="ts">
import { defineProps } from "vue";
import CardItem from "./CardItem.vue";

interface CardItemInfo {
  title: string;
  imgUrl: string;
  viewNum: number;
  shareNum: number;
  hot: number;
}

defineProps<{
  list: CardItemInfo[];
}>();
</script>

<template>
  <div class="card-list grid grid-cols-2 gap-2 mx-1 mb-4">
    <CardItem
      v-for="(item, index) in list"
      :key="index"
      :img-url="item.imgUrl"
      :title="item.title"
      :view-num="item.viewNum"
      :hot="item.hot"
      :share-num="item.shareNum"
    />
  </div>
</template>

<style scoped></style>
