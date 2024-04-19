<script setup lang="ts">
import { onMounted, ref } from "vue";

interface CourseType {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
}

const courseTypeList = ref<CourseType[]>([]);

const courseTypes: CourseType[] = Array.from({ length: 5 }, (_, i) => {
  return {
    id: i + 1,
    name: `课程类别${i + 1}`,
    imgUrl: "http://source.cute-pikachu.cn/img/default.webp",
    description: `介绍${i}`.repeat(50),
  };
});

onMounted(async () => {
  courseTypeList.value = courseTypes;
});
</script>

<template>
  <van-cell
    size="large"
    is-link
    v-for="course in courseTypeList"
    :key="course.id"
    :title="course.name"
  >
    <template #icon>
      <van-image
        :src="course.imgUrl"
        class="w-10 h-10 rounded-xl overflow-hidden mr-2"
      />
    </template>
    <template #label>
      <p class="van-multi-ellipsis--l3">{{ course.description }}</p>
    </template>
  </van-cell>
</template>

<style scoped></style>
