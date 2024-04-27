<script setup lang="ts">
import { ref } from "vue";
import MessageItem from "./components/MessageItem.vue";

const message = ref<string>("");
</script>

<template class="relative">
  <div
    class="message-box snap-y overflow-auto p-2 space-y-3 flex flex-col bg-gray-50"
  >
    <MessageItem :self="i % 2 == 0" v-for="i in 10" :key="i" />
  </div>
  <div
    class="input-box fixed inset-x-0 bottom-0 outline outline-1 outline-gray-300 rounded-xl overflow-hidden m-1 shadow shadow-gray-400 bg-slate-50"
  >
    <van-field
      v-model="message"
      size="medium"
      class="items-center"
      placeholder="请输入问题"
    >
      <template #left-icon>
        <van-icon class-prefix="fa-regular fa-microphone fa-2x" class="mr-2" />
      </template>
      <template #right-icon>
        <van-icon class-prefix="fa-regular fa-circle-plus fa-2x" />
      </template>
      <template #button>
        <van-button type="primary" class="rounded-lg">Send</van-button>
      </template>
    </van-field>
  </div>
</template>

<style scoped>
.message-box {
  height: calc(100vh - 110px);
}
</style>
