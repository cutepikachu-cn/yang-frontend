import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  LoginUserVO,
  UserControllerService,
  UserLoginRequest,
} from "@/modules/api";
import { showFailToast } from "vant";

export const useUserStore = defineStore("user", () => {
  const currentUser = ref<LoginUserVO | null | undefined>(null);

  const router = useRouter();

  const userLogin = (userLoginRequest: UserLoginRequest) => {
    UserControllerService.userLogin(userLoginRequest)
      .then((res) => {
        if (res.code !== 0) {
          currentUser.value = null;
          showFailToast("登陆失败");
          return;
        }
        currentUser.value = res.data;
        router.replace(`/${currentUser.value?.userRole}/center`);
      })
      .catch(() => {
        showFailToast("登陆失败");
      });
  };

  const userLogout = async () => {
    currentUser.value = null;
    await UserControllerService.userLogout();
    const redirectURL = window.location.href;
    router.replace(`/login?redirectURL=${redirectURL}`);
  };

  const getLoginUser = async () => {
    if (currentUser.value) {
      return currentUser.value;
    }
    const res = await UserControllerService.getLoginUser();
    if (res.code === 0) {
      currentUser.value = res.data;
    } else {
      currentUser.value = null;
      router.replace("/login");
    }
    return currentUser.value;
  };

  return {
    userLogin,
    userLogout,
    getLoginUser,
  };
});
