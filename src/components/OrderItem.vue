<script setup lang="ts">
import { defineProps } from "vue";
import { OrderVO } from "@/modules/api";

const props = defineProps<OrderVO>();
</script>

<template>
  <div class="p-2 my-2 divide-y rounded-lg bg-neutral-50">
    <h2 class="shop-info text-sm">
      <van-icon class-prefix="fa-regular fa-farm" class="text-primary" />
      <span class="mx-1">{{ commodity.shop.userNickname }}</span>
      <van-icon
        class-prefix="fa-regular fa-chevron-right"
        class="text-gray-400"
      />
    </h2>
    <van-card
      :thumb="commodity?.imgUrl[0]"
      :title="commodity?.name"
      :desc="commodity?.detail"
      :num="quantity"
      :price="(quantity * commodity?.price).toFixed(2)"
    >
    </van-card>
  </div>
</template>

<style scoped></style>
