import { defineStore } from "pinia";
import { ref } from "vue";

export const useTabbarStore = defineStore("tabbar", () => {
  const active = ref(2);

  return { active };
});
