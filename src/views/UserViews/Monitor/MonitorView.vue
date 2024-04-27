<script setup lang="ts">
import Canvas from "@antv/f-vue";
import { Area, Axis, Chart, Line, Tooltip } from "@antv/f2";

const data1 = [
  {
    time: "2016-08-08 00:00:00",
    tem: 10,
  },
  {
    time: "2016-08-08 00:10:00",
    tem: 22,
  },
  {
    time: "2016-08-08 00:30:00",
    tem: 20,
  },
  {
    time: "2016-08-09 00:35:00",
    tem: 26,
  },
  {
    time: "2016-08-09 01:00:00",
    tem: 20,
  },
  {
    time: "2016-08-09 01:20:00",
    tem: 26,
  },
  {
    time: "2016-08-10 01:40:00",
    tem: 28,
  },
  {
    time: "2016-08-10 02:00:00",
    tem: 20,
  },
  {
    time: "2016-08-10 02:20:00",
    tem: 18,
  },
];
const scale1 = {
  time: {
    type: "timeCat",
    mask: "MM/DD",
    tickCount: 3,
    range: [0, 1],
  },
  tem: {
    tickCount: 5,
    min: 0,
    alias: "日均温度",
  },
};

const data2 = [
  {
    time: "2016-08-08 00:00:00",
    tem: 10,
  },
  {
    time: "2016-08-08 00:10:00",
    tem: 22,
  },
  {
    time: "2016-08-08 00:30:00",
    tem: 16,
  },
  {
    time: "2016-08-09 00:35:00",
    tem: 26,
  },
  {
    time: "2016-08-09 01:00:00",
    tem: 12,
  },
  {
    time: "2016-08-09 01:20:00",
    tem: 26,
  },
  {
    time: "2016-08-10 01:40:00",
    tem: 18,
  },
  {
    time: "2016-08-10 02:00:00",
    tem: 26,
  },
  {
    time: "2016-08-10 02:20:00",
    tem: 12,
  },
];
const scale2 = {
  time: {
    type: "timeCat",
    tickCount: 3,
  },
  tem: {
    min: 0,
  },
};
</script>

<template>
  <van-cell title="健康状况" size="large">
    <van-tag type="success" size="large"> 正常</van-tag>
  </van-cell>
  <van-cell title="温度" size="large" />
  <Canvas>
    <Chart :data="data1" :scale="scale1">
      <Axis field="time" :style="{ label: { align: 'between' } }" />
      <Axis field="tem" />
      <Line x="time" y="tem" shape="smooth" />
      <Tooltip />
    </Chart>
  </Canvas>

  <van-cell title="运动" size="large" />
  <Canvas>
    <Chart :data="data2" :scale="scale2">
      <Axis field="time" :style="{ label: { align: 'between' } }" />
      <Axis field="tem" />
      <Area x="time" y="tem" color="l(90) 0:#1890FF 1:#f7f7f7" shape="rect" />
      <Line x="time" y="tem" color="l(90) 0:#1890FF 1:#f7f7f7" shape="smooth" />
    </Chart>
  </Canvas>
</template>

<style scoped></style>
