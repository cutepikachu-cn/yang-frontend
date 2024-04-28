<script setup lang="ts">
import { ref } from "vue";
import { UserLoginRequest } from "@/modules/api";
import { useUserStore } from "@/store/user";
import { useRoute } from "vue-router";
import lodash from "lodash";

const { userLogin } = useUserStore();
const route = useRoute();

const active = ref((route.query.role as string) === "farm" ? 1 : 0);

const userAccount = ref("user-test");
const userPassword = ref("cutepikachu");
const onSubmit = lodash.throttle(
  (values: UserLoginRequest) => {
    userLogin(values);
  },
  1000,
  {
    trailing: false,
  }
);
</script>

<template>
  <div
    class="login w-screen h-screen align-center flex flex-col justify-center"
  >
    <div class="px-2 absolute left-0 top-0">
      <router-link to="/user" class="text-primary text-sm">
        <van-icon class-prefix="fa-regular fa-home" />
        回到首页
      </router-link>
    </div>
    <van-tabs v-model:active="active" animated swipeable>
      <van-tab title="羊场主登录">
        <van-icon
          class-prefix="fa-regular fa-farm fa-5x fa-flip"
          style="--fa-animation-duration: 3s"
          class="w-full text-center py-10 text-primary"
        />
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="userAccount"
              name="userAccount"
              label="账户"
              placeholder="请输入账户"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写用户名', trigger: 'onBlur' },
                {
                  pattern: /^[\w-]{4,16}$/,
                  message: '用户名必须为4-16位字母、数字或`-`',
                  trigger: 'onBlur',
                },
              ]"
            />
            <van-field
              v-model="userPassword"
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
          </van-cell-group>
          <div style="margin: 16px">
            <van-button
              round
              class="rounded-xl"
              block
              type="primary"
              native-type="submit"
            >
              登录
            </van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="小金主登录">
        <van-icon
          class-prefix="fa-regular fa-user fa-5x fa-flip"
          style="--fa-animation-duration: 3s"
          class="w-full text-center py-10 text-primary"
        />
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="userAccount"
              name="userAccount"
              label="账户"
              placeholder="请输入账户"
              required
              size="large"
              :rules="[
                { required: true, message: '请填写账户', trigger: 'onBlur' },
                {
                  pattern: /^[\w-]{4,16}$/,
                  message: '账户必须为4-16位字母、数字或`-`',
                  trigger: 'onBlur',
                },
              ]"
            />
            <van-field
              v-model="userPassword"
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
          </van-cell-group>
          <div style="margin: 16px">
            <van-button
              round
              class="rounded-xl"
              block
              type="primary"
              native-type="submit"
            >
              登录
            </van-button>
          </div>
        </van-form>
      </van-tab>
    </van-tabs>
    <router-link class="text-primary text-sm self-end px-4" to="/register"
      >去注册
    </router-link>
  </div>
</template>

<style scoped></style>
