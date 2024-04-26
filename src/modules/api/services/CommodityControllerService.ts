/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseCommodityVO } from "../models/BaseResponseCommodityVO";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageCommodity } from "../models/BaseResponsePageCommodity";
import type { BaseResponsePageCommodityVO } from "../models/BaseResponsePageCommodityVO";
import type { CommodityAddRequest } from "../models/CommodityAddRequest";
import type { CommodityQueryRequest } from "../models/CommodityQueryRequest";
import type { CommodityUpdateRequest } from "../models/CommodityUpdateRequest";
import type { DeleteRequest } from "../models/DeleteRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class CommodityControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updateCommodity(
    requestBody: CommodityUpdateRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/commodity/update",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageCommodity OK
   * @throws ApiError
   */
  public static pageCommodity(
    requestBody: CommodityQueryRequest
  ): CancelablePromise<BaseResponsePageCommodity> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/commodity/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageCommodityVO OK
   * @throws ApiError
   */
  public static pageCommodityVo(
    requestBody: CommodityQueryRequest
  ): CancelablePromise<BaseResponsePageCommodityVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/commodity/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageCommodityVO OK
   * @throws ApiError
   */
  public static pageSelfCommodityVo(
    requestBody: CommodityQueryRequest
  ): CancelablePromise<BaseResponsePageCommodityVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/commodity/page/vo/self",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static deleteCommodity(
    requestBody: DeleteRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/commodity/delete",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static addCommodity(
    requestBody: CommodityAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/commodity/add",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param id
   * @returns BaseResponseCommodityVO OK
   * @throws ApiError
   */
  public static getCommodityVoById(
    id: number
  ): CancelablePromise<BaseResponseCommodityVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/commodity/get/vo",
      query: {
        id: id,
      },
    });
  }
}
