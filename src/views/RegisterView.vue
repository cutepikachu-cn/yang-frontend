<script setup lang="ts">
import { ref } from "vue";
import { UserControllerService, UserRegisterRequest } from "@/modules/api";
import lodash from "lodash";
import { showFailToast, showSuccessToast } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();

const active = ref(0);

const userRegisterRequest = ref<UserRegisterRequest>({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
  userNickname: "",
  userRole: "",
});

const onSubmit = lodash.throttle(
  async (form: UserRegisterRequest) => {
    form.userRole = active.value === 0 ? "farm" : "user";
    const res = await UserControllerService.userRegister(form);
    if (res.code !== 0) {
      showFailToast("注册失败");
      return;
    }
    userRegisterRequest.value = {
      userAccount: "",
      userPassword: "",
      checkPassword: "",
      userNickname: "",
      userRole: "",
    };
    router.replace("/login");
    showSuccessToast("注册成功");
  },
  1000,
  {
    trailing: false,
  }
);
</script>

<template>
  <div
    class="register w-screen h-screen align-center flex flex-col justify-center"
  >
    <div class="px-2">
      <router-link to="/user" class="text-primary text-sm">
        <van-icon class-prefix="fa-regular fa-home" />
        回到首页
      </router-link>
    </div>
    <van-tabs v-model:active="active" animated swipeable>
      <van-tab title="羊场主注册">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="userRegisterRequest.userAccount"
              name="userAccount"
              label="账户"
              placeholder="请输入账户"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写账户', trigger: 'onBlur' },
                {
                  pattern: /^[\w-]{4,16}$/,
                  message: '用户名必须为4-16位字母、数字或`-`',
                  trigger: 'onBlur',
                },
              ]"
            />
            <van-field
              v-model="userRegisterRequest.userPassword"
              type="password"
              name="userPassword"
              label="密码"
              placeholder="请输入密码"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写密码', trigger: 'onBlur' },
                {
                  pattern: /^[\w-]{6,20}$/,
                  message: '密码必须为6-20位字母、数字或`-`',
                  trigger: 'onBlur',
                },
              ]"
            />
            <van-field
              v-model="userRegisterRequest.checkPassword"
              type="password"
              name="checkPassword"
              label="确认密码"
              placeholder="请再次输入密码"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写密码', trigger: 'onBlur' },
                {
                  message: '两次输入不一致',
                  trigger: 'onChange',
                  validator: (val) => val === userRegisterRequest.userPassword,
                },
              ]"
            />
            <van-field
              v-model="userRegisterRequest.userNickname"
              name="userNickname"
              label="昵称"
              placeholder="请输入昵称"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写密码', trigger: 'onBlur' },
                {
                  message: '昵称为4~20个字符',
                  trigger: 'onBlur',
                  validator: (val) => 4 <= val.length && val.length <= 20,
                },
              ]"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button
              round
              class="rounded-xl"
              block
              type="primary"
              native-type="submit"
            >
              注册
            </van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="小金主注册">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="userRegisterRequest.userAccount"
              name="userAccount"
              label="账户"
              placeholder="请输入账户"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写账户', trigger: 'onBlur' },
                {
                  pattern: /^[\w-]{4,16}$/,
                  message: '用户名必须为4-16位字母、数字或`-`',
                  trigger: 'onBlur',
                },
              ]"
            />
            <van-field
              v-model="userRegisterRequest.userPassword"
              type="password"
              name="userPassword"
              label="密码"
              placeholder="请输入密码"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写密码', trigger: 'onBlur' },
                {
                  pattern: /^[\w-]{6,20}$/,
                  message: '密码必须为6-20位字母、数字或`-`',
                  trigger: 'onBlur',
                },
              ]"
            />
            <van-field
              v-model="userRegisterRequest.checkPassword"
              type="password"
              name="checkPassword"
              label="确认密码"
              placeholder="请再次输入密码"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写密码', trigger: 'onBlur' },
                {
                  message: '两次输入不一致',
                  trigger: 'onChange',
                  validator: (val) => val === userRegisterRequest.userPassword,
                },
              ]"
            />
            <van-field
              v-model="userRegisterRequest.userNickname"
              name="userNickname"
              label="昵称"
              placeholder="请输入昵称"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写密码', trigger: 'onBlur' },
                {
                  message: '昵称为4~20个字符',
                  trigger: 'onBlur',
                  validator: (val) => 4 <= val.length && val.length <= 20,
                },
              ]"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button
              round
              class="rounded-xl"
              block
              type="primary"
              native-type="submit"
            >
              注册
            </van-button>
          </div>
        </van-form>
      </van-tab>
    </van-tabs>
    <router-link class="text-primary text-sm self-end px-4" to="/login"
      >去登录
    </router-link>
  </div>
</template>

<style scoped></style>
