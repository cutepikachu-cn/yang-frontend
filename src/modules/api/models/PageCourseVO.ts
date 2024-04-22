/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseVO } from "./CourseVO";
import type { OrderItem } from "./OrderItem";

export type PageCourseVO = {
  records?: Array<CourseVO>;
  total?: number;
  size?: number;
  current?: number;
  orders?: Array<OrderItem>;
  optimizeCountSql?: PageCourseVO;
  searchCount?: PageCourseVO;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};
