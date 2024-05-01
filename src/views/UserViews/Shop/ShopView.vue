<script setup lang="ts">
import { ref } from "vue";
import {
  CommodityControllerService,
  type CommodityQueryRequest,
  CommodityVO,
} from "@/modules/api";
import CardItem from "@/components/CardItem.vue";

const searchValue = ref("");
const onClickFilter = () => {
  return;
};

const commodityList = ref<CommodityVO[]>([]);

const commodityQueryRequest = ref<CommodityQueryRequest>({
  current: 1,
  pageSize: 5,
  sortField: "createTime",
  sortOrder: "descend",
});

const sortValue = ref("createTime");
const sortOptions = [
  { text: "最新", value: "createTime" },
  { text: "按查看人数", value: "visitNum" },
  { text: "按热度", value: "hot" },
];
const changeSort = (value) => {
  commodityList.value = [];
  commodityQueryRequest.value = {
    current: 1,
    pageSize: 5,
    sortField: value,
    sortOrder: "descend",
  };
  finished.value = false;
  onLoad();
};

const loading = ref(false);
const finished = ref(false);
const onLoad = async () => {
  const { data } = await CommodityControllerService.pageCommodityVo(
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
  <van-search
    v-model="searchValue"
    placeholder="请输入搜索关键词"
    input-align="center"
    show-action
  >
    <template #action>
      <van-icon
        class-prefix="fa-regular fa-filter-list"
        color="var(--van-primary-color)"
        class="text-2xl align-middle"
        @click="onClickFilter"
      />
    </template>
  </van-search>

  <van-cell title="优质羊肉" center size="large">
    <template #value>
      <van-dropdown-menu>
        <van-dropdown-item
          v-model="sortValue"
          :options="sortOptions"
          @change="changeSort"
        />
      </van-dropdown-menu>
    </template>
  </van-cell>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="card-list grid grid-cols-2 gap-2 mx-1 mb-4">
      <CardItem
        v-for="(item, index) in commodityList"
        :key="index"
        :img-url="item.imgUrl"
        :name="item.name"
        :visit-num="item.visitNum"
        :share-num="item.shareNum"
        :hot="item.hot"
        :id="item.id"
      />
    </div>
  </van-list>
</template>

<style scoped></style>
