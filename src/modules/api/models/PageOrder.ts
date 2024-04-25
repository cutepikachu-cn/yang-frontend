/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from "./Order";
import type { OrderItem } from "./OrderItem";

export type PageOrder = {
  records?: Array<Order>;
  total?: number;
  size?: number;
  current?: number;
  orders?: Array<OrderItem>;
  optimizeCountSql?: PageOrder;
  searchCount?: PageOrder;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};
