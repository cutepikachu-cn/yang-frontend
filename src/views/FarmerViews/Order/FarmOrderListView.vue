<script setup lang="ts">
import { ref } from "vue";
import {
  OrderControllerService,
  OrderQueryRequest,
  OrderVO,
} from "@/modules/api";
import OrderItem from "@/views/FarmerViews/Order/FarmOrderItem.vue";

const orderList = ref<OrderVO[]>([]);
const orderQueryRequest = ref<OrderQueryRequest>({
  current: 1,
  pageSize: 5,
  sortField: "createTime",
  sortOrder: "descend",
});
const loading = ref(false);
const finished = ref(false);
const onLoad = async () => {
  const { data } = await OrderControllerService.pageOrderVo(
    orderQueryRequest.value
  );
  orderList.value.push(...data?.records);
  loading.value = false;
  if (
    data?.records?.length === 0 ||
    orderList.value.length >= Number(data?.total)
  ) {
    finished.value = true;
  }
  orderQueryRequest.value.current += 1;
};
</script>

<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="order-list p-1">
      <OrderItem
        v-for="order in orderList"
        :key="order.id"
        :id="order.id"
        :commodity="order.commodity"
        :quantity="Number(order.quantity)"
        :status="order.status"
      />
    </div>
  </van-list>
</template>

<style scoped></style>
