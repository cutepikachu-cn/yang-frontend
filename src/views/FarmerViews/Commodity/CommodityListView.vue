<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  CommodityControllerService,
  type CommodityQueryRequest,
  CommodityVO,
  LoginUserVO,
} from "@/modules/api";
import { useUserStore } from "@/store/user";

const { getLoginUser } = useUserStore();

const userInfo = ref<LoginUserVO>({});
onMounted(async () => {
  userInfo.value = (await getLoginUser()) || {};
});

const commodityList = ref<CommodityVO[]>([]);

const commodityQueryRequest = ref<CommodityQueryRequest>({
  current: 1,
  pageSize: 10,
  sortField: "createTime",
  sortOrder: "descend",
});

const loading = ref(false);
const finished = ref(false);

const onLoad = async () => {
  const { data } = await CommodityControllerService.pageSelfCommodityVo(
    commodityQueryRequest.value
  );
  commodityList.value.push(...data?.records);
  loading.value = false;
  if (
    data?.records?.length === 0 ||
    commodityList.value.length >= Number(data?.total)
  ) {
    finished.value = true;
  }
  commodityQueryRequest.value.current += 1;
};
</script>

<template>
  <van-cell-group class="m-2">
    <van-button
      type="primary"
      size="large"
      block
      icon="custom"
      icon-prefix="fa-regular fa-circle-plus"
      to="/farm/commodity/add"
    >
      添加商品
    </van-button>
  </van-cell-group>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-card
      v-for="commodity in commodityList"
      :key="commodity.id"
      :title="commodity.name"
      :thumb="commodity.imgUrl?.[0]"
      :desc="commodity.detail"
      :price="commodity.price"
    />
  </van-list>
</template>

<style scoped></style>
