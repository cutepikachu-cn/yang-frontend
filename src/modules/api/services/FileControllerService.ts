/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseString } from "../models/BaseResponseString";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class FileControllerService {
  /**
   * @param fileBiz
   * @param requestBody
   * @returns BaseResponseString OK
   * @throws ApiError
   */
  public static uploadFile(
    fileBiz: string,
    requestBody?: {
      file: Blob;
    },
  ): CancelablePromise<BaseResponseString> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/file/upload',
      query: {
        'fileBiz': fileBiz,
      },
      formData: requestBody,
      mediaType: 'application/json',
    });
  }
}
