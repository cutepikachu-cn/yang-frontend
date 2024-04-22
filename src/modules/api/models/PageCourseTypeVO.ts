/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseTypeVO } from "./CourseTypeVO";
import type { OrderItem } from "./OrderItem";

export type PageCourseTypeVO = {
  records?: Array<CourseTypeVO>;
  total?: number;
  size?: number;
  current?: number;
  orders?: Array<OrderItem>;
  optimizeCountSql?: PageCourseTypeVO;
  searchCount?: PageCourseTypeVO;
  optimizeJoinOfCountSql?: boolean;
  maxLimit?: number;
  countId?: string;
  pages?: number;
};
