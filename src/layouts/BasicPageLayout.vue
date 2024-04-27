<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const onClickLeft = () => router.back();

const route = useRoute();
const title = route.meta.title || "Page";
</script>

<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    placeholder
    fixed
  />
  <router-view />
</template>

<style scoped lang="scss"></style>
