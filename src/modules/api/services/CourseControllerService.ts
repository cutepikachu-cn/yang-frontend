/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseCourseVO } from "../models/BaseResponseCourseVO";
import type { BaseResponsePageCourse } from "../models/BaseResponsePageCourse";
import type { BaseResponsePageCourseVO } from "../models/BaseResponsePageCourseVO";
import type { CourseQueryRequest } from "../models/CourseQueryRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class CourseControllerService {
  /**
   * @param requestBody
   * @returns BaseResponsePageCourse OK
   * @throws ApiError
   */
  public static pageCourse(
    requestBody: CourseQueryRequest
  ): CancelablePromise<BaseResponsePageCourse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/course/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageCourseVO OK
   * @throws ApiError
   */
  public static pageCourseVo(
    requestBody: CourseQueryRequest
  ): CancelablePromise<BaseResponsePageCourseVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/course/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param id
   * @returns BaseResponseCourseVO OK
   * @throws ApiError
   */
  public static getCourseVoById(
    id: number
  ): CancelablePromise<BaseResponseCourseVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/course/get/vo",
      query: {
        id: id,
      },
    });
  }
}
