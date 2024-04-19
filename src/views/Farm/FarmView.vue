<script setup lang="ts">
import { onMounted, ref } from "vue";
import CardList from "@/components/CardList.vue";

const searchValue = ref("");
const onClickFilter = () => {
  return;
};
const sortValue = ref(0);
const sortOptions = [
  { text: "综合排序", value: 0 },
  { text: "按人数", value: 1 },
  { text: "按热度", value: 2 },
];

interface CardItemInfo {
  title: string;
  imgUrl: string;
  viewNum: number;
  shareNum: number;
  hot: number;
}

const list = ref<CardItemInfo[]>([]);

const farmList: CardItemInfo[] = [
  {
    title: "【福建】功夫山羊",
    imgUrl: "http://source.cute-pikachu.cn/img/item_5.webp",
    viewNum: 146,
    shareNum: 100,
    hot: 4.5,
  },
  {
    title: "【福建】羊苗",
    imgUrl: "http://source.cute-pikachu.cn/img/item_6.webp",
    viewNum: 65,
    shareNum: 3,
    hot: 3,
  },
  {
    title: "【福建】羊饲料",
    imgUrl: "http://source.cute-pikachu.cn/img/item_7.webp",
    viewNum: 1464234423432,
    shareNum: 100,
    hot: 4.5,
  },
  {
    title: "【福建】闽南黄牛",
    imgUrl: "http://source.cute-pikachu.cn/img/item_8.webp",
    viewNum: 65,
    shareNum: 3,
    hot: 3,
  },
];

onMounted(async () => {
  list.value = farmList;
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
        class-prefix="fa-duotone fa-filter-list"
        color="var(--van-primary-color)"
        class="text-2xl align-middle"
        @click="onClickFilter"
      />
    </template>
  </van-search>

  <van-row align="center" justify="space-around" class="mt-2">
    <van-col span="10">
      <van-button
        type="primary"
        round
        plain
        text="数据监测"
        size="large"
        to="/monitor"
        class="w-full shadow-md shadow-primary/50"
      />
    </van-col>
    <van-col span="10">
      <van-button
        type="primary"
        round
        plain
        text="双向社区"
        size="large"
        class="w-full shadow-md shadow-primary/50"
      />
    </van-col>
  </van-row>
  <van-row align="center" justify="space-around" class="my-2">
    <van-col span="10">
      <van-button
        type="primary"
        round
        plain
        text="医疗服务"
        size="large"
        to="/assistant"
        class="w-full shadow-md shadow-primary/50"
      />
    </van-col>
    <van-col span="10">
      <van-button
        type="primary"
        round
        plain
        text="联系客服"
        size="large"
        to="/assistant"
        class="w-full shadow-md shadow-primary/50"
      />
    </van-col>
  </van-row>

  <van-cell title="养殖资源" center size="large">
    <template #value>
      <van-dropdown-menu>
        <van-dropdown-item v-model="sortValue" :options="sortOptions" />
      </van-dropdown-menu>
    </template>
  </van-cell>

  <CardList :list="list" />
</template>

<style scoped></style>
