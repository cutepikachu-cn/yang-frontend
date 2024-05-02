<script setup lang="ts">
import { ref } from "vue";
import { UserControllerService, UserRegisterRequest } from "@/modules/api";
import lodash from "lodash";
import { useRoute, useRouter } from "vue-router";
import { showFailToast, showSuccessToast } from "vant";

const route = useRoute();
const router = useRouter();

const active = ref((route.query.role as string) === "user" ? "user" : "farm");

const accountInfoRef = ref();
const userRegisterRequest = ref<UserRegisterRequest>({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
  userNickname: "",
  userRole: "farm",
});

const farmInfoRef = ref();
const farmInfo = ref<{
  farmAddress: string;
  farmArea: number;
  sheepNum: number;
}>({
  farmAddress: "",
  farmArea: 0,
  sheepNum: 0,
});

const farmerInfoRef = ref();
const farmerInfo = ref<{
  name: string;
  idCard: string;
  farmerEmail: string;
  farmerPhone: string;
  businessLicense: string;
  bankName: string;
  accountNumber: string;
}>({
  name: "",
  idCard: "",
  farmerEmail: "",
  farmerPhone: "",
  businessLicense: "",
  bankName: "",
  accountNumber: "",
});

const onSubmit = lodash.throttle(
  async () => {
    let isValid = true;
    isValid =
      isValid &&
      Object.values(accountInfoRef.value.getValidationStatus()).every(
        (value) => value === "passed"
      );
    isValid =
      isValid &&
      Object.values(farmInfoRef.value.getValidationStatus()).every(
        (value) => value === "passed"
      );
    isValid =
      isValid &&
      Object.values(farmerInfoRef.value.getValidationStatus()).every(
        (value) => value === "passed"
      );
    console.log(isValid);
    const res = await UserControllerService.userRegister(
      userRegisterRequest.value
    );
    if (res.code !== 0) {
      showFailToast("注册失败");
      return;
    }
    userRegisterRequest.value = {
      userAccount: "",
      userPassword: "",
      checkPassword: "",
      userNickname: "",
      userRole: "farm",
    };
    router.replace("/login?role=farm");
    showSuccessToast("注册成功");
  },
  1000,
  {
    trailing: false,
  }
);

const step = ref(0);
</script>

<template>
  <div
    class="register w-screen h-screen align-center flex flex-col justify-center"
  >
    <div class="px-2 absolute left-0 top-0">
      <router-link to="/user" class="text-primary text-sm">
        <van-icon class-prefix="fa-regular fa-home" />
        回到首页
      </router-link>
    </div>
    <van-tabs v-model:active="active" animated swipeable>
      <van-tab title="羊场主注册" name="farm">
        <van-steps :active="step">
          <van-step> 账户信息</van-step>
          <van-step> 羊场信息</van-step>
          <van-step> 羊场主信息</van-step>
        </van-steps>
        <div v-show="step === 0" class="step-1">
          <van-form ref="accountInfoRef">
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
                    validator: (val) =>
                      val === userRegisterRequest.userPassword,
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
          </van-form>
          <div class="m-3">
            <van-button
              round
              class="rounded-xl"
              block
              type="primary"
              @click="step++"
            >
              下一步
            </van-button>
          </div>
        </div>
        <div v-show="step === 1" class="step-2">
          <van-form ref="farmInfoRef">
            <van-cell-group inset>
              <van-field
                v-model="farmInfo.farmAddress"
                name="farmAddress"
                label="地址"
                placeholder="请输入羊场地址"
                required
                size="large"
                :rules="[
                  {
                    required: true,
                    message: '请填写羊场地址',
                    trigger: 'onBlur',
                  },
                ]"
              />
              <van-field
                v-model="farmInfo.farmArea"
                name="farmArea"
                label="面积"
                placeholder="请输入羊场面积"
                required
                size="large"
                type="number"
                :rules="[
                  {
                    required: true,
                    message: '请填写羊场面积',
                    trigger: 'onBlur',
                  },
                  {
                    validator: (val) => val > 0,
                    message: '请填写正确的羊场面积',
                  },
                  {
                    trigger: 'onBlur',
                    formatter: (value) => {
                      farmInfo.farmArea = Number(value);
                    },
                  },
                ]"
              />
              <van-field
                v-model="farmInfo.sheepNum"
                name="sheepNum"
                label="羊群数量"
                placeholder="请输入羊群数量"
                required
                size="large"
                type="digit"
                :rules="[
                  {
                    required: true,
                    message: '请填写羊群数量',
                    trigger: 'onBlur',
                  },
                  {
                    validator: (val) => val > 0,
                    message: '请填写正确的羊群数量',
                  },
                  {
                    trigger: 'onBlur',
                    formatter: (value) => {
                      farmInfo.sheepNum = Number(Number(value).toFixed(0));
                    },
                  },
                ]"
              />
            </van-cell-group>
          </van-form>
          <div class="m-3 space-x-2 flex flex-row">
            <van-button
              round
              class="rounded-xl border-0"
              type="primary"
              plain
              @click="step--"
            >
              上一步
            </van-button>
            <van-button
              round
              class="rounded-xl flex-grow"
              type="primary"
              @click="step++"
            >
              下一步
            </van-button>
          </div>
        </div>
        <div v-show="step === 2" class="step-3">
          <van-form ref="farmerInfoRef">
            <van-cell-group inset>
              <van-field
                v-model="farmerInfo.name"
                name="name"
                label="姓名"
                placeholder="请输入羊场主姓名"
                required
                size="large"
                :rules="[
                  {
                    required: true,
                    message: '请填写羊场主姓名',
                    trigger: 'onBlur',
                  },
                ]"
              />
              <van-field
                v-model="farmerInfo.idCard"
                name="idCard"
                label="身份证号码"
                placeholder="请输入羊场主身份证号码"
                required
                size="large"
                :rules="[
                  {
                    required: true,
                    message: '请填写羊场主身份证号码',
                    trigger: 'onBlur',
                  },
                ]"
              />
              <van-field
                v-model="farmerInfo.farmerEmail"
                name="farmerEmail"
                label="邮箱"
                placeholder="请输入羊场主邮箱"
                required
                size="large"
                type="email"
                :rules="[
                  {
                    required: true,
                    message: '请填写羊场主邮箱',
                    trigger: 'onBlur',
                  },
                ]"
              />
              <van-field
                v-model="farmerInfo.farmerPhone"
                name="farmerPhone"
                label="手机号"
                placeholder="请输入羊场主手机号"
                required
                size="large"
                type="tel"
                :rules="[
                  {
                    required: true,
                    message: '请填写羊场主手机号',
                    trigger: 'onBlur',
                  },
                ]"
              />
              <van-field
                v-model="farmerInfo.businessLicense"
                name="businessLicense"
                label="营业执照"
                placeholder="请输入营业执照号码"
                required
                size="large"
                :rules="[
                  {
                    required: true,
                    message: '请填写营业执照号码',
                    trigger: 'onBlur',
                  },
                ]"
              />
              <van-field
                v-model="farmerInfo.bankName"
                name="bankName"
                label="银行名称"
                placeholder="请输入银行名称"
                required
                size="large"
                :rules="[
                  {
                    required: true,
                    message: '请填写银行名称',
                    trigger: 'onBlur',
                  },
                ]"
              />
              <van-field
                v-model="farmerInfo.accountNumber"
                name="accountNumber"
                label="银行账号"
                placeholder="请输入银行账号"
                required
                size="large"
                :rules="[
                  {
                    required: true,
                    message: '请填写银行账号',
                    trigger: 'onBlur',
                  },
                ]"
              />
            </van-cell-group>
          </van-form>
          <div class="m-3 space-x-2 flex flex-row">
            <van-button
              round
              class="rounded-xl border-0"
              type="primary"
              plain
              @click="step--"
            >
              上一步
            </van-button>
            <van-button
              round
              class="rounded-xl flex-grow"
              type="primary"
              @click="onSubmit"
            >
              完成注册
            </van-button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <router-link
      class="text-primary text-sm self-end px-4"
      :to="`/login?role=${active}`"
    >
      去登录
    </router-link>
  </div>
</template>

<style scoped></style>
