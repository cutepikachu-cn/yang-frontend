<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  FileControllerService,
  LoginUserVO,
  UserControllerService,
  UserUpdateSelfRequest,
} from "@/modules/api";
import { useUserStore } from "@/store/user";
import { showFailToast, showSuccessToast } from "vant";

const { getLoginUser } = useUserStore();

const userInfo = ref<LoginUserVO>({});

onMounted(async () => {
  userInfo.value = (await getLoginUser()) || {};
  userNickname.value = userInfo.value.userNickname as string;
  userProfile.value = userInfo.value.userProfile as string;
  fileValue.value.push({ url: userInfo.value.userAvatar });
});

const userNickname = ref("");
const userNicknameEditShow = ref(false);
const userProfile = ref("");
const userProfileEditShow = ref(false);

const onSubmit = async (values: UserUpdateSelfRequest) => {
  const res = await UserControllerService.updateSelf(values);
  if (res.code !== 0) {
    showFailToast(res.message || "修改失败");
    return;
  }
  const fieldName = Object.getOwnPropertyNames(
    values
  )[0] as keyof UserUpdateSelfRequest;
  userInfo.value[fieldName] = values[fieldName];
  showSuccessToast("修改成功");
};

const fileValue = ref<{ [key: never] }[]>([]);
const afterRead = async (file: { file: File }) => {
  const fileUpload = await FileControllerService.uploadFile("USER_AVATAR", {
    file: file.file,
  });
  if (fileUpload.code !== 0) {
    showFailToast("头像上传失败");
    return;
  }
  const userAvatarUrl = fileUpload.data as string;
  const res = await UserControllerService.updateSelf({
    userAvatar: userAvatarUrl,
  });
  if (res.code !== 0) {
    showFailToast("头像修改失败");
    return;
  }
  userInfo.value.userAvatar = userAvatarUrl;
  fileValue.value = [{ url: userAvatarUrl }];
  showSuccessToast("头像修改成功");
};
</script>

<template>
  <van-cell size="large" title="头像">
    <van-uploader
      preview-size="6rem"
      class="rounded-full overflow-hidden"
      reupload
      :max-size="1024 * 1024"
      :max-count="1"
      result-type="file"
      accept="image/jpeg, image/png, image/svg+xml, image/webp"
      v-model="fileValue"
      :after-read="afterRead"
      :deletable="false"
    >
      <template #preview-cover>
        <div class="w-full h-full flex justify-center items-center">
          <van-icon
            class-prefix="fa-regular fa-camera fa-3x"
            style="--fa-primary-opacity: 0.5"
          />
        </div>
      </template>
    </van-uploader>
  </van-cell>
  <van-cell size="large" title="账户" :value="userInfo.userAccount" />
  <van-cell-group>
    <van-cell
      size="large"
      title="昵称"
      :value="userInfo.userNickname"
      is-link
      @click="userNicknameEditShow = true"
    />
    <van-form
      @submit="onSubmit"
      class="nickname-edit flex flex-row items-center my-1 pr-2"
      v-if="userNicknameEditShow"
    >
      <van-field
        required
        name="userNickname"
        class="flex-1"
        v-model="userNickname"
        :rules="[{ required: true, message: '昵称不能为空' }]"
        placeholder="请输入昵称"
      />
      <van-button
        type="primary"
        plain
        size="small"
        class="mx-1"
        native-type="submit"
      >
        保存
      </van-button>
      <van-button
        type="primary"
        plain
        size="small"
        class="mx-1"
        @click="userNicknameEditShow = false"
      >
        取消
      </van-button>
    </van-form>
  </van-cell-group>
  <van-cell-group>
    <van-cell
      size="large"
      title="介绍"
      :value="userInfo.userProfile"
      is-link
      @click="userProfileEditShow = true"
    />
    <van-form
      @submit="onSubmit"
      class="profile-edit flex flex-row items-center my-1 pr-2"
      v-if="userProfileEditShow"
    >
      <van-field
        required
        name="userProfile"
        class="flex-1"
        v-model="userProfile"
        type="textarea"
        :rules="[{ required: true, message: '介绍不能为空' }]"
        placeholder="请输入介绍"
      />
      <van-button
        type="primary"
        plain
        size="small"
        class="mx-1"
        native-type="submit"
      >
        保存
      </van-button>
      <van-button
        type="primary"
        plain
        size="small"
        class="mx-1"
        @click="userProfileEditShow = false"
      >
        取消
      </van-button>
    </van-form>
  </van-cell-group>
  <van-cell size="large" title="角色" :value="userInfo.userRole">
    <van-tag size="large" type="primary" v-if="userInfo.userRole === 'farm'">
      农场主
    </van-tag>
    <van-tag size="large" type="success" v-if="userInfo.userRole === 'user'">
      小金主
    </van-tag>
    <van-tag size="large" type="warning" v-if="userInfo.userRole === 'admin'">
      管理员
    </van-tag>
  </van-cell>
  <van-cell
    size="large"
    title="注册时间"
    :value="new Date(userInfo.createTime).toLocaleString()"
  />
</template>

<style scoped></style>
