<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { CommodityControllerService, CommodityVO } from "@/modules/api";

const route = useRoute();
const router = useRouter();

const commodityId = ref();
const commodity = ref<CommodityVO>({});
const showOverlay = ref(false);

onMounted(async () => {
  commodityId.value = route.params.commodityId;
  const res = await CommodityControllerService.getCommodityVoById(
    commodityId.value
  );
  if (res.code !== 0) {
    showOverlay.value = true;
    router.replace("/home");
    return;
  }
  commodity.value = res.data;
  showOverlay.value = false;
});
</script>

<template>
  <div class="commodity-detail divide-y">
    <van-swipe :loop="false">
      <van-swipe-item
        v-for="(imgUrl, index) in commodity.imgUrl"
        :key="index"
        class="shadow-[inset_0_0_40px_0_rgb(0,0,0,0.1)]"
      >
        <van-image :src="imgUrl" fit="cover" class="w-full h-64" />
      </van-swipe-item>
    </van-swipe>
    <div class="commodity-info py-1 px-2 divide-y">
      <div class="data">
        <div class="price-and-stock text-md flex justify-between items-end">
          <span class="text-warning">
            ￥<span class="text-2xl">{{ commodity.price }}</span>
          </span>
          <span class="text-gray-500">库存: {{ commodity.stock }}</span>
        </div>
        <div
          class="visit-and-share text-sm text-gray-500 flex justify-between items-end"
        >
          <span>
            <van-icon class-prefix="fa-regular fa-eye" class="mx-1" />{{
              commodity.visitNum
            }}
          </span>
          <span>
            <van-icon
              class-prefix="fa-regular fa-share-from-square"
              class="mx-1"
            />{{ commodity.shareNum }}
          </span>
        </div>
      </div>
      <h1 class="name text-2xl">{{ commodity.name }}</h1>
      <p class="detail text-sm">{{ commodity.detail }}</p>
    </div>

    <div
      class="shop-info m-1 p-1 outline outline-1 outline-gray-300 rounded-2xl"
    >
      <van-cell size="large" center>
        <template #icon>
          <van-image
            :src="commodity.shop?.userAvatar"
            round
            class="size-12 rounded-2xl mr-2"
          />
        </template>
        <template #title>
          <h2 class="font-bold h-fll">{{ commodity.shop?.userNickname }}</h2>
        </template>
        <template #label>
          <p class="van-multi-ellipsis--l2">
            {{ commodity.shop?.userProfile }}
          </p>
        </template>
        <template #right-icon>
          <van-button round plain class="rounded-xl">关注羊场</van-button>
        </template>
      </van-cell>
      <van-button block round class="rounded-2xl">关注羊场</van-button>
    </div>

    <div
      class="fixed inset-x-0 bottom-0 p-1 shadow-2xl flex flex-row items-center justify-between"
    >
      <div class="icon flex-1 flex flex-row items-center justify-around">
        <div
          class="shop van-haptics-feedback flex flex-col items-center text-xs"
        >
          <van-icon class-prefix="fa-regular fa-shop" class="text-lg" />
          <span>店铺</span>
        </div>
        <van-divider vertical />
        <div
          class="collect van-haptics-feedback flex flex-col items-center text-xs"
        >
          <van-icon class-prefix="fa-regular fa-headset" class="text-lg" />
          <span>咨询</span>
        </div>
        <van-divider vertical />
        <div
          class="collect van-haptics-feedback flex flex-col items-center text-xs"
        >
          <van-icon class-prefix="fa-regular fa-star" class="text-lg" />
          <span>收藏</span>
        </div>
      </div>
      <div class="button">
        <van-button
          type="primary"
          class="m-1 px-6 text-lg"
          icon="custom"
          icon-prefix="fa-regular fa-cart-plus"
          round
          plain
        />
        <van-button type="primary" class="px-8 text-lg" round> 购买</van-button>
      </div>
    </div>
  </div>

  <van-overlay :show="showOverlay" :duration="0" :z-index="1000" class="">
    <router-link
      to="/home"
      class="absolute left-2 top-2 van-haptics-feedback text-gray-300"
    >
      <van-icon class-prefix="fa-regular fa-chevron-left" />
      回到首页
    </router-link>
    <div class="size-full flex flex-col items-center justify-center">
      <span class="fa-stack fa-5x">
        <i class="fa-regular fa-shelves-empty fa-stack-1x text-gray-300"></i>
        <i class="fa-regular fa-empty-set fa-stack-2x text-gray-500"></i>
      </span>
      <span class="text-gray-300 fa-3x">未上架</span>
    </div>
  </van-overlay>
</template>

<style scoped></style>
