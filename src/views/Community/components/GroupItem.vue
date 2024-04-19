<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  avatar: string;
}>();
</script>

<template>
  <van-cell
    :title="title"
    is-link
    center
    :border="false"
    :clickable="false"
    size="large"
    title-class="shadow-lg shadow-primary/20 rounded-lg text-center"
  >
    <template #icon>
      <van-image
        round
        fit="cover"
        class="shadow-md shadow-primary/50 size-10"
        :src="avatar"
      />
    </template>
  </van-cell>
</template>

<style scoped></style>
