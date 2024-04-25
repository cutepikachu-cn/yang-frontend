/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserVO } from "./UserVO";

export type CommodityVO = {
  id?: number;
  userId?: number;
  name?: string;
  isSale?: number;
  imgUrl?: Array<string>;
  detail?: string;
  stock?: number;
  price?: number;
  visitNum?: number;
  shareNum?: number;
  hot?: number;
  shop?: UserVO;
  createTime?: string;
};
