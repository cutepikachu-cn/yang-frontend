/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseType } from "./CourseType";
import type { OrderItem } from "./OrderItem";

export type PageCourseType = {
  records?: Array<CourseType>;
  total?: number;
  size?: number;
  current?: number;
  orders?: Array<OrderItem>;
  optimizeCountSql?: PageCourseType;
  searchCount?: PageCourseType;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};
