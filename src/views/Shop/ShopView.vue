<script setup lang="ts">
import { onMounted, ref } from "vue";
import CardList from "@/components/CardList.vue";

const searchValue = ref("");
const onClickFilter = () => {
  return;
};

interface CardItemInfo {
  title: string;
  imgUrl: string;
  viewNum: number;
  shareNum: number;
  hot: number;
}

const sortValue = ref(0);
const sortOptions = [
  { text: "综合排序", value: 0 },
  { text: "按人数", value: 1 },
  { text: "按热度", value: 2 },
];

const shopList: CardItemInfo[] = [
  {
    title: "黑山羊羊腿",
    imgUrl: "http://source.cute-pikachu.cn/img/shop_1.webp",
    viewNum: 146,
    shareNum: 100,
    hot: 4.5,
  },
  {
    title: "仙岭黑山羊",
    imgUrl: "http://source.cute-pikachu.cn/img/shop_2.webp",
    viewNum: 65,
    shareNum: 3,
    hot: 3,
  },
  {
    title: "枇杷",
    imgUrl: "http://source.cute-pikachu.cn/img/shop_3.webp",
    viewNum: 1464234423432,
    shareNum: 100,
    hot: 4.5,
  },
  {
    title: "黑山羊羊肉",
    imgUrl: "http://source.cute-pikachu.cn/img/shop_4.webp",
    viewNum: 65,
    shareNum: 3,
    hot: 3,
  },
];

const list = ref<CardItemInfo[]>([]);

onMounted(async () => {
  list.value = shopList;
});
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

  <van-cell title="可选择农产品" center size="large">
    <template #value>
      <van-dropdown-menu>
        <van-dropdown-item v-model="sortValue" :options="sortOptions" />
      </van-dropdown-menu>
    </template>
  </van-cell>

  <CardList :list="list" />
</template>

<style scoped></style>
