/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommodityVO } from "./CommodityVO";

export type OrderVO = {
  id?: number;
  userId?: number;
  shopId?: number;
  commodityId?: number;
  quantity?: number;
  commodity?: CommodityVO;
  status?: string;
  payTime?: string;
  refundTime?: string;
  paymentMethod?: string;
  createTime?: string;
  updateTime?: string;
};
