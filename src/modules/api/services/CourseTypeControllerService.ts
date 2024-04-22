/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseCourseTypeVO } from "../models/BaseResponseCourseTypeVO";
import type { BaseResponsePageCourseType } from "../models/BaseResponsePageCourseType";
import type { BaseResponsePageCourseTypeVO } from "../models/BaseResponsePageCourseTypeVO";
import type { PageRequest } from "../models/PageRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class CourseTypeControllerService {
  /**
   * @param requestBody
   * @returns BaseResponsePageCourseType OK
   * @throws ApiError
   */
  public static pageCourseType(
    requestBody: PageRequest
  ): CancelablePromise<BaseResponsePageCourseType> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/course-type/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageCourseTypeVO OK
   * @throws ApiError
   */
  public static pageCourseTypeVo(
    requestBody: PageRequest
  ): CancelablePromise<BaseResponsePageCourseTypeVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/course-type/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param id
   * @returns BaseResponseCourseTypeVO OK
   * @throws ApiError
   */
  public static getCourseTypeVo(
    id: number
  ): CancelablePromise<BaseResponseCourseTypeVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/course-type/get/vo",
      query: {
        id: id,
      },
    });
  }
}
