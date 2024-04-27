<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import { LoginUserVO } from "@/modules/api";
import { showFailToast } from "vant";

const { getLoginUser, userLogout } = useUserStore();

const router = useRouter();

const userInfo = ref<LoginUserVO>({});

onMounted(async () => {
  userInfo.value = (await getLoginUser()) || {};
  if (userInfo.value.userRole !== "user") {
    showFailToast("不是小金主！\n请前往\n登录或注册");
    router.replace("/login?role=user");
  }
});

const active = ref(0);

const actions = [{ text: "关于" }, { text: "退出登录" }];

const onSelect = (
  action: {
    text: string;
    icon: string;
    color: string;
    disabled: boolean;
    className: string | Array<never> | object;
  },
  index: number
) => {
  // console.log(action);
  if (index === 0) {
    router.push("/about");
  }
  if (index == 1) {
    userLogout();
  }
};
</script>

<template>
  <div class="title rounded-b-3xl bg-primary shadow-primary shadow-md h-24 p-1">
    <div class="menu absolute text-2xl right-2">
      <van-popover :actions="actions" placement="bottom-end" @select="onSelect">
        <template #reference>
          <van-icon class-prefix="fa-regular fa-bars" color="white" />
        </template>
      </van-popover>
    </div>
    <h1 class="text-2xl text-center text-white">小金主个人中心</h1>
  </div>

  <div
    class="info bg-white h-50 shadow-[0_-5px_20px_0_white,0_5px_5px_0_rgb(25,137,250,0.5)] mx-3 p-2 rounded-3xl ring-white flex flex-col items-center relative"
  >
    <van-image
      round
      fit="cover"
      class="-top-10 absolute w-20 h-20 shadow-[0_-5px_20px_0_white,0_5px_5px_0_rgb(25,137,250,0.5)]"
      :src="userInfo?.userAvatar"
    />
    <div class="mt-11 mb-1 text-xl text-black -top-10 flex items-center h-10">
      <h2 class="mr-2">
        {{ userInfo?.userNickname || userInfo?.userAccount }}
      </h2>
      <van-tag type="primary" class="px-3" size="large"> TAG</van-tag>
    </div>

    <div class="func w-full">
      <van-row align="center" justify="space-around" :gutter="[10, 10]" wrap>
        <van-col span="12">
          <van-button
            type="primary"
            round
            plain
            size="large"
            text="用户信息"
            class="w-full shadow-md shadow-primary/20"
            to="/user/self/info"
          />
        </van-col>
        <van-col span="12">
          <van-button
            type="primary"
            round
            plain
            size="large"
            text="订单管理"
            class="w-full shadow-md shadow-primary/20"
          />
        </van-col>
      </van-row>
    </div>
  </div>

  <div class="more my-4">
    <van-tabs v-model:active="active" swipeable>
      <van-tab title-class="text-lg">
        <template #title>
          <van-badge dot color="#facc15"> 待参加</van-badge>
        </template>
        待参加
      </van-tab>
      <van-tab title-class="text-lg">
        <template #title>
          <van-badge dot color="#facc15"> 待签收</van-badge>
        </template>
        待签收
      </van-tab>
      <van-tab title-class="text-lg">
        <template #title>
          <van-badge dot color="#facc15"> 售后</van-badge>
        </template>
        售后
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped>
:deep(.van-tab) .van-tab__text {
  overflow: visible;
}
</style>
