<script setup lang="ts">
import { ref } from "vue";
import {
  CourseType,
  CourseTypeControllerService,
  PageRequest,
} from "@/modules/api";

const courseTypeList = ref<CourseType[]>([]);

const pageRequest = ref<PageRequest>({
  current: 1,
  pageSize: 10,
  sortField: "createTime",
  sortOrder: "descend",
});

const loading = ref(false);
const finished = ref(false);

const onLoad = async () => {
  const { data } = await CourseTypeControllerService.pageCourseTypeVo(
    pageRequest.value
  );
  courseTypeList.value.push(...data?.records);
  loading.value = false;
  if (
    data?.records?.length === 0 ||
    courseTypeList.value.length >= Number(data?.total)
  ) {
    finished.value = true;
  }
  pageRequest.value.current += 1;
};
</script>

<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
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
  </van-list>
</template>

<style scoped></style>
