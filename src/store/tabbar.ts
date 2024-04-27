import { defineStore } from "pinia";
import { ref } from "vue";

export const useTabbarStore = defineStore("tabbar", () => {
  const userViewActiveTab = ref(2);
  const farmViewActiveTab = ref(0);

  return { userViewActiveTab, farmViewActiveTab };
});
