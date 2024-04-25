<script setup lang="ts">
import { defineProps, ref } from "vue";

interface CardItemInfo {
  title: string;
  imgUrl: string;
  viewNum: number;
  shareNum: number;
  hot: number;
}

const props = defineProps<CardItemInfo>();

const rate = ref<number>(props.hot);
</script>

<template>
  <div class="rounded-2xl overflow-hidden shadow-primary/30 shadow-md">
    <van-image fit="cover" :src="imgUrl" class="w-full h-48" />
    <div class="content px-1.5 pb-2">
      <h1 class="text-sm truncate">{{ title }}</h1>
      <div class="data flex flex-row h-4">
        <div class="view text-xs truncate w-1/2">
          <van-icon class-prefix="fa-regular fa-eye" />
          {{ viewNum }}
        </div>
        <div class="share text-xs truncate w-1/2">
          <van-icon class-prefix="fa-regular fa-share-from-square" />
          {{ shareNum }}
        </div>
      </div>
      <div class="hot text-xs">
        热度：
        <van-rate v-model="rate" count="5" color="#ffd21e" size="0.75rem" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
