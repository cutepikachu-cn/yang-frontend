<script setup lang="ts">
import { ref } from "vue";
import GroupItem from "@/components/GroupItem.vue";

const active = ref(0);

const loading = ref(false);
const finished = ref(false);

const groups = ref<
  {
    title: string;
    avatar: string;
  }[]
>([]);

const onLoad = () => {
  groups.value = [
    {
      title: "厦门外地乡贤群",
      avatar: "http://source.cute-pikachu.cn/img/default.webp",
    },
    {
      title: "泉州外地乡贤群",
      avatar: "http://source.cute-pikachu.cn/img/default.webp",
    },
    {
      title: "泉州外地团购群",
      avatar: "http://source.cute-pikachu.cn/img/default.webp",
    },
  ];
  loading.value = false;
};
</script>

<template>
  <van-row justify="space-around" align="center" class="mx-0.5 my-2">
    <van-col span="6" v-for="i in 4" :key="i" class="text-center">
      <van-image
        round
        fit="cover"
        class="shadow-md shadow-primary/50 size-14"
        src="http://source.cute-pikachu.cn/img/default.webp"
      />
    </van-col>
  </van-row>
  <van-tabs v-model:active="active" shrink>
    <van-tab title="常用">
      <van-cell title="发现" is-link center size="large">
        <template #icon>
          <van-icon
            class-prefix="fa-regular fa-file-magnifying-glass fa-3x"
            class="mr-2 text-success"
          />
        </template>
      </van-cell>
    </van-tab>
    <van-tab title="推荐"> 推荐</van-tab>
  </van-tabs>

  <van-row justify="space-around" align="center" class="my-2">
    <van-col span="8">
      <van-button
        type="primary"
        plain
        text="附近场主"
        size="large"
        class="w-full shadow-inner shadow-primary/50"
      />
    </van-col>
    <van-col span="8">
      <van-button
        type="primary"
        plain
        text="加盟我们"
        size="large"
        class="w-full shadow-inner shadow-primary/50"
      />
    </van-col>
  </van-row>

  <van-list
    :loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <GroupItem
      v-for="(group, index) in groups"
      :key="index"
      :title="group.title"
      :avatar="group.avatar"
    />
  </van-list>
</template>

<style scoped></style>
