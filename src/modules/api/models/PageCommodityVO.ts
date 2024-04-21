/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommodityVO } from "./CommodityVO";
import type { OrderItem } from "./OrderItem";

export type PageCommodityVO = {
  records?: Array<CommodityVO>;
  total?: number;
  size?: number;
  current?: number;
  orders?: Array<OrderItem>;
  optimizeCountSql?: PageCommodityVO;
  searchCount?: PageCommodityVO;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};

