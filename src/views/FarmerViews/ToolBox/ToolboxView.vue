<script setup lang="ts">
import { ref } from "vue";

const searchValue = ref("");
const onClickFilter = () => {
  return;
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

  <van-row
    align="center"
    justify="space-around"
    :gutter="[0, 10]"
    class="my-2"
    wrap
  >
    <van-col span="11">
      <van-button
        type="primary"
        round
        plain
        text="数据监测"
        size="large"
        to="/farm/monitor"
        class="w-full shadow-md shadow-primary/50"
      />
    </van-col>
    <van-col span="11">
      <van-button
        type="primary"
        round
        plain
        text="农场主社区"
        size="large"
        class="w-full shadow-md shadow-primary/50"
      />
    </van-col>
    <van-col span="11">
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
    <van-col span="11">
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
</template>

<style scoped></style>
