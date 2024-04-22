/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Course } from "./Course";
import type { OrderItem } from "./OrderItem";

export type PageCourse = {
  records?: Array<Course>;
  total?: number;
  size?: number;
  current?: number;
  orders?: Array<OrderItem>;
  optimizeCountSql?: PageCourse;
  searchCount?: PageCourse;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};
