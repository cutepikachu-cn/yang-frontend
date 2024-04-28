<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  CommodityAddRequest,
  CommodityControllerService,
  FileControllerService,
  LoginUserVO,
} from "@/modules/api";
import lodash from "lodash";
import { showFailToast, showSuccessToast } from "vant";

import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

const { getLoginUser } = useUserStore();

const router = useRouter();

const userInfo = ref<LoginUserVO>({});
onMounted(async () => {
  userInfo.value = (await getLoginUser()) || {};
  if (userInfo.value.userRole !== "farm") {
    showFailToast("请登录！");
    router.replace("/login?role=farm");
  }
});

const fileValue = ref([]);
const afterRead = (files: never) => {
  console.log(files);
};

const resetForm: CommodityAddRequest = {
  name: "",
  isSale: 0,
  imgUrl: [],
  detail: "",
  stock: 0,
  price: 0,
};

const form = ref<CommodityAddRequest>(resetForm);

const reset = () => {
  form.value = resetForm;
  fileValue.value = [];
};

const onSubmit = lodash.throttle(
  async () => {
    for (let i = 0; i < fileValue.value.length; i++) {
      const file = fileValue.value[i].file;
      const fileUpload = await FileControllerService.uploadFile(
        "COMMODITY_IMG",
        {
          file,
        }
      );
      if (fileUpload.code !== 0) {
        showFailToast("添加商品失败");
        form.value.imgUrl = [];
        return;
      }
      form.value.imgUrl.push(fileUpload.data as string);
    }
    const res = await CommodityControllerService.addCommodity(form.value);
    if (res.code !== 0) {
      showFailToast("添加商品失败");
      return;
    }
    reset();
    showSuccessToast("添加商品成功");
  },
  1000,
  {
    trailing: false,
  }
);
</script>

<template @submit="onSubmit">
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        name="file"
        label="商品图片"
        required
        :rules="[{ required: true, message: '请选择商品图片' }]"
      >
        <template #input>
          <van-uploader
            reupload
            :max-size="1024 * 1024"
            multiple
            :max-count="10"
            v-model="fileValue"
            :after-read="afterRead"
          />
        </template>
      </van-field>
      <van-field
        name="name"
        label="商品名称"
        placeholder="商品名称"
        required
        v-model="form.name"
        :rules="[{ required: true, message: '请输入商品名称' }]"
      />
      <van-field name="isSale" label="是否上架" required>
        <template #input>
          <van-switch
            v-model="form.isSale"
            :active-value="1"
            :inactive-value="0"
          />
        </template>
      </van-field>
      <van-field
        name="detail"
        label="商品详情"
        v-model="form.detail"
        required
        type="textarea"
        :rules="[{ required: true, message: '请输入商品详情' }]"
      />
      <van-field
        name="price"
        label="商品价格"
        v-model="form.price"
        type="number"
        required
        :rules="[
          { required: true, message: '请输入商品价格' },
          {
            trigger: 'onBlur',
            formatter: (value) =>
              (form.price = Number(Number(value).toFixed(2))),
          },
        ]"
      />
      <van-field
        name="stock"
        label="商品库存"
        v-model="form.stock"
        type="digit"
        required
        :rules="[
          { required: true, message: '请输入商品库存' },
          {
            trigger: 'onBlur',
            formatter: (value) => {
              value = Number(value);
              form.stock = value >= 0 ? value : 0;
            },
          },
        ]"
      />
    </van-cell-group>
    <van-button round block type="primary" native-type="submit" class="my-2">
      提交
    </van-button>
  </van-form>
</template>

<style scoped></style>
