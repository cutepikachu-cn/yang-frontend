<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  CourseControllerService,
  CourseQueryRequest,
  CourseTypeControllerService,
  CourseTypeVO,
  CourseVO,
} from "@/modules/api";

const route = useRoute();
const router = useRouter();

onMounted(async () => {
  courseQueryRequest.value.courseTypeId = (route.params.courseTypeId ||
    0) as number;
  const res = await CourseTypeControllerService.getCourseTypeVo(
    courseQueryRequest.value.courseTypeId
  );
  if (res.code !== 0) {
    router.replace("/course");
    return;
  }
  courseType.value = res.data;
});

const active = ref(0);
const courseType = ref<CourseTypeVO>({});
const courseList = ref<CourseVO[]>([]);

const courseQueryRequest = ref<CourseQueryRequest>({
  current: 1,
  pageSize: 10,
  sortField: "createTime",
  sortOrder: "descend",
  courseTypeId: 0,
});

const loading = ref(false);
const finished = ref(false);

const onLoad = async () => {
  const { data } = await CourseControllerService.pageCourseVo(
    courseQueryRequest.value
  );
  courseList.value.push(...data?.records);
  loading.value = false;
  if (
    data?.records?.length === 0 ||
    courseList.value.length >= Number(data?.total)
  ) {
    finished.value = true;
  }
  courseQueryRequest.value.current += 1;
};

const showDescription = ref(false);
</script>

<template>
  <div class="current-progress relative" v-if="courseList.length !== 0">
    <van-image class="w-full h-48" fit="cover" :src="courseList[0].imgUrl" />
    <div
      class="cover text-white text-sm absolute inset-x-1/4 inset-y-1/4 flex flex-col items-center justify-center space-y-1"
    >
      <h2>上次学到：</h2>
      <h1 class="font-bold">{{ courseList[0].name }}</h1>
      <van-button
        plain
        size="small"
        round
        icon="custom"
        icon-prefix="fa-regular fa-play"
        color="white"
        class="bg-transparent px-2"
      >
        继续学习
      </van-button>
    </div>
  </div>
  <van-tabs v-model:active="active" swipeable>
    <van-tab title="课程">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          title-class="font-bold"
          center
          is-link
          @click="showDescription = true"
          size="large"
          :title="courseType.name"
        >
          <template #right-icon>
            简介
            <van-icon class-prefix="fa-regular fa-chevron-right" class="ml-1" />
          </template>
        </van-cell>
        <van-popup
          v-model:show="showDescription"
          position="bottom"
          closeable
          round
          teleport="#app"
          :z-index="1000"
          class="p-1"
        >
          <h1 class="mt-6 font-bold">{{ courseType.name }}</h1>
          <van-divider />
          <p class="text-sm">{{ courseType.description }}</p>
        </van-popup>
        <van-cell-group inset>
          <van-cell
            size="large"
            is-link
            v-for="course in courseList"
            :key="course.id"
            :title="course.name"
            icon="a"
            icon-prefix="fa-regular fa-circle-play"
            center
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
            <template #right-icon>
              <van-icon
                class-prefix="fa-regular fa-circle-play"
                class="text-primary text-xl ml-1"
              />
            </template>
          </van-cell>
        </van-cell-group>
      </van-list>
    </van-tab>
    <van-tab title="直播"> 直播</van-tab>
  </van-tabs>
</template>

<style scoped></style>
