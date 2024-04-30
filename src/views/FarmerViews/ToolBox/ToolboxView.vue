<script setup lang="ts">
import { ref } from "vue";

const searchValue = ref("");
const onClickFilter = () => {
  return;
};

const active = ref(0);
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

  <van-tabs v-model:active="active" shrink>
    <van-tab title="常用">
      <van-cell title="课程" is-link center size="large" to="/course">
        <template #icon>
          <van-icon
            class-prefix="fa-regular fa-book fa-3x"
            class="mr-2 text-success"
          />
        </template>
      </van-cell>
      <van-cell title="发现" is-link center size="large">
        <template #icon>
          <van-icon
            class-prefix="fa-regular fa-file-magnifying-glass fa-3x"
            class="mr-2 text-success"
          />
        </template>
      </van-cell>
      <van-cell title="分析" is-link center size="large" to="/farm/monitor">
        <template #icon>
          <van-icon
            class-prefix="fa-regular fa-chart-mixed fa-3x"
            class="mr-2 text-success"
          />
        </template>
      </van-cell>
    </van-tab>
    <van-tab title="推荐"> 推荐</van-tab>
  </van-tabs>
</template>

<style scoped></style>
