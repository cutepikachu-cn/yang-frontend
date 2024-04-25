<script setup lang="ts">
import { onMounted, ref } from "vue";
import CardList from "@/components/CardList.vue";

const searchValue = ref("");

const onClickFilter = () => {
  return;
};

const swipeItemList = ref<
  {
    id: number;
    imgUrl: string;
  }[]
>([]);

const list = ref<CardItemInfo[]>([]);

interface CardItemInfo {
  title: string;
  imgUrl: string;
  viewNum: number;
  shareNum: number;
  hot: number;
}

const swipeList = [
  {
    id: 1,
    imgUrl: "http://source.cute-pikachu.cn/img/swipe_1.webp",
  },
  {
    id: 2,
    imgUrl: "http://source.cute-pikachu.cn/img/swipe_2.webp",
  },
];

const homeList: CardItemInfo[] = [
  {
    title: "【内蒙古】乌珠穆山羊",
    imgUrl: "http://source.cute-pikachu.cn/img/item_1.webp",
    viewNum: 146,
    shareNum: 100,
    hot: 4.5,
  },
  {
    title: "【新疆】柯尔克孜羊",
    imgUrl: "http://source.cute-pikachu.cn/img/item_2.webp",
    viewNum: 65,
    shareNum: 3,
    hot: 3,
  },
  {
    title: "【甘肃】山丹马",
    imgUrl: "http://source.cute-pikachu.cn/img/item_3.webp",
    viewNum: 1464234423432,
    shareNum: 100,
    hot: 4.5,
  },
  {
    title: "【福建】闽南黄牛",
    imgUrl: "http://source.cute-pikachu.cn/img/item_4.webp",
    viewNum: 65,
    shareNum: 3,
    hot: 3,
  },
];

onMounted(async () => {
  swipeItemList.value = swipeList;
  list.value = homeList;
});

const sortValue = ref(0);
const sortOptions = [
  { text: "综合排序", value: 0 },
  { text: "按人数", value: 1 },
  { text: "按热度", value: 2 },
];
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
      v-for="item in swipeItemList"
      :key="item.id"
      class="text-white text-center"
    >
      <van-image :src="item.imgUrl" />
    </van-swipe-item>
  </van-swipe>

  <van-row justify="space-around" align="center" class="my-2">
    <van-col span="8">
      <van-button
        type="primary"
        text="羊场主"
        size="large"
        round
        class="text-lg w-full shadow-md shadow-primary/50"
      />
    </van-col>
    <van-col span="8">
      <van-button
        type="primary"
        text="小金主"
        size="large"
        round
        class="text-lg w-full shadow-md shadow-primary/50"
      />
    </van-col>
  </van-row>

  <van-cell title="优质羊肉" center size="large">
    <template #value>
      <van-dropdown-menu>
        <van-dropdown-item v-model="sortValue" :options="sortOptions" />
      </van-dropdown-menu>
    </template>
  </van-cell>

  <CardList :list="list" />
</template>

<style scoped></style>
