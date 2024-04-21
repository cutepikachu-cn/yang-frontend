<script setup lang="ts">
import { ref } from "vue";
import {
  CommodityAddRequest,
  CommodityControllerService,
  FileControllerService,
} from "@/modules/api";
import { showFailToast, showSuccessToast } from "vant";

const fileValue = ref([]);
const afterRead = (file: never) => {
  console.log(file);
};
const form = ref<CommodityAddRequest>({
  name: "",
  isSale: 0,
  imgUrl: "",
  detail: "",
  price: 0,
});

const resetForm = () => {
  form.value = {
    name: "",
    isSale: 0,
    imgUrl: "",
    detail: "",
    price: 0,
  };
  fileValue.value = [];
};

const onSubmit = async (values: never) => {
  const file = fileValue.value[0]?.file;
  const fileUpload = await FileControllerService.uploadFile("COMMODITY_IMG", {
    file,
  });
  if (fileUpload.code !== 0) {
    showFailToast("添加商品失败");
    return;
  }
  form.value.imgUrl = fileUpload.data as string;
  const res = await CommodityControllerService.addCommodity(form.value);
  if (res.code !== 0) {
    showFailToast("添加商品失败");
    return;
  }
  resetForm();
  showSuccessToast("添加商品成功");
};
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
            :max-count="1"
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
    </van-cell-group>
    <van-button round block type="primary" native-type="submit" class="my-2">
      提交
    </van-button>
  </van-form>
</template>

<style scoped></style>
