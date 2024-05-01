import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useTabbarStore = defineStore("tabbar", () => {
  const userViewActiveTab = useStorage("userViewActiveTab", 2);
  const farmViewActiveTab = useStorage("farmViewActiveTab", 2);

  return { userViewActiveTab, farmViewActiveTab };
});
