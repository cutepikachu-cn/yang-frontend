<script setup lang="ts">
import { onMounted, ref } from "vue";
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

const swipeList = ref<CommodityVO[]>([]);

onMounted(async () => {
  const res = await CommodityControllerService.pageCommodityVo({
    current: 1,
    pageSize: 5,
    sortField: "hot",
    sortOrder: "descend",
  });
  if (res.code !== 0) {
    return;
  }
  swipeList.value = res.data?.records;
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

  <van-cell title="活动推荐" size="large" is-link />
  <van-swipe>
    <van-swipe-item
      v-for="item in swipeList"
      :key="item.id"
      class="text-white text-center"
    >
      <van-image :src="item.imgUrl?.[0]" fit="cover" class="w-full h-48" />
    </van-swipe-item>
  </van-swipe>

  <van-row justify="space-around" align="center" class="my-2">
    <van-col span="20">
      <van-button
        type="primary"
        plain
        size="large"
        round
        class="w-full shadow-inner shadow-primary/50 te"
        to="/farm/register"
      >
        <div class="flex flex-row items-center justify-center text-lg">
          <van-icon
            class-prefix="fa-regular fa-handshake fa-beat-fade fa-2x"
            class="mx-2"
          />
          羊场主？加盟我们！
        </div>
      </van-button>
    </van-col>
  </van-row>

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
