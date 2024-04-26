<script setup lang="ts">
import { defineProps, ref } from "vue";
import { CommodityVO } from "@/modules/api";

const props = defineProps<CommodityVO>();

const rate = ref<number>(props.hot ? props.hot : 2.5);
</script>

<template>
  <div class="rounded-2xl overflow-hidden shadow-primary/30 shadow-md">
    <van-image fit="cover" :src="imgUrl[0]" class="w-full h-48" />
    <div class="content px-1.5 pb-2">
      <h1 class="text-sm truncate">{{ name }}</h1>
      <div class="data flex flex-row h-4">
        <div class="view text-xs truncate w-1/2">
          <van-icon class-prefix="fa-regular fa-eye" />
          {{ visitNum }}
        </div>
        <div class="share text-xs truncate w-1/2">
          <van-icon class-prefix="fa-regular fa-share-from-square" />
          {{ shareNum }}
        </div>
      </div>
      <div class="hot text-xs">
        热度：
        <van-rate
          v-model="rate"
          count="5"
          color="#ffd21e"
          size="0.75rem"
          allow-half
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
