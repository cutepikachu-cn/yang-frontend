/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponseOrderVO } from "../models/BaseResponseOrderVO";
import type { BaseResponsePageOrder } from "../models/BaseResponsePageOrder";
import type { BaseResponsePageOrderVO } from "../models/BaseResponsePageOrderVO";
import type { OrderAddRequest } from "../models/OrderAddRequest";
import type { OrderPayRequest } from "../models/OrderPayRequest";
import type { OrderQueryRequest } from "../models/OrderQueryRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class OrderControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static payOrder(
    requestBody: OrderPayRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/order/pay",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageOrder OK
   * @throws ApiError
   */
  public static pageOrder(
    requestBody: OrderQueryRequest
  ): CancelablePromise<BaseResponsePageOrder> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/order/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageOrderVO OK
   * @throws ApiError
   */
  public static pageOrderVoFarm(
    requestBody: OrderQueryRequest
  ): CancelablePromise<BaseResponsePageOrderVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/order/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static addOrder(
    requestBody: OrderAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/order/add",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param id
   * @returns BaseResponseOrderVO OK
   * @throws ApiError
   */
  public static getOrderVoByIdFarm(
    id: number
  ): CancelablePromise<BaseResponseOrderVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/order/get/vo",
      query: {
        id: id,
      },
    });
  }
}
