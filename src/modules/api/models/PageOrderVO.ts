/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from "./OrderItem";
import type { OrderVO } from "./OrderVO";

export type PageOrderVO = {
  records?: Array<OrderVO>;
  total?: number;
  size?: number;
  current?: number;
  orders?: Array<OrderItem>;
  optimizeCountSql?: PageOrderVO;
  searchCount?: PageOrderVO;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};
