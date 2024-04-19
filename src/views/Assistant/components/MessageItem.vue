<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

withDefaults(
  defineProps<{
    self?: boolean;
  }>(),
  {
    self: false,
  }
);
</script>

<template>
  <div class="message-item flex flex-row" v-if="!self">
    <van-icon
      class-prefix="fa-duotone fa-user-robot fa-2x"
      class="rounded-xl mr-2 shrink-0 text-primary"
    />
    <div
      class="content w-10/12 p-1 bg-stone-100 rounded shadow-lg shadow-grey-100"
    >
      <p>
        {{ "a".repeat(200) }}
      </p>
    </div>
  </div>
  <div class="message-item flex flex-row" v-else>
    <div
      class="content w-10/12 p-1 bg-stone-100 rounded shadow-lg shadow-grey-100"
    >
      <p>
        {{ "a".repeat(200) }}
      </p>
    </div>
    <van-image
      src="http://source.cute-pikachu.cn/img/default.webp"
      round
      class="w-10 h-10 rounded-xl ml-2 shrink-0"
    />
  </div>
</template>

<style scoped>
.content {
  overflow-wrap: break-word;
}
</style>
