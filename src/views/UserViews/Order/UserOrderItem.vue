<script setup lang="ts">
import { defineProps, ref } from "vue";
import { OrderVO } from "@/modules/api";
import { showToast } from "vant";

const props = defineProps<OrderVO>();

const showMore = ref(false);
const actions = [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }];
const onSelect = (action) => showToast(action.text);
</script>

<template>
  <div class="p-1 my-2 divide-y rounded-lg bg-neutral-50">
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
    <div class="status text-sm p-1 bg-primary/10 rounded-lg">
      <!--<van-icon class-prefix="fa-regular fa-truck-fast"/>-->
      <span v-if="status === 'unpaid'">未支付</span>
      <span v-else-if="status === 'paid'">已支付</span>
      <span v-else-if="status === 'completed'">已完成</span>
      <span v-else-if="status === 'cancelled'">已取消</span>
      <span v-else-if="status === 'after_sale'">售后中</span>
      <span v-else>未知</span>
    </div>
    <div class="func p-1 flex flex-row items-center justify-between text-sm">
      <van-popover
        v-model:show="showMore"
        :actions="actions"
        @select="onSelect"
      >
        <template #reference> 更多 </template>
      </van-popover>
      <van-button type="primary" plain round size="small">查看详情</van-button>
    </div>
  </div>
</template>

<style scoped></style>
