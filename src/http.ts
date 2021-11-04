import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";

type HttpMethod = Method;

export enum HttpMethodType {
  GET = "GET",
  DELETE = "DELETE",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  LINK = "LINK",
  UNLINK = "UNLINK",
}

type HttpConfig = AxiosRequestConfig;

/**
 * http Axios wraaper class
 */
export class Http {
  private axiosInstance: AxiosInstance;

  constructor(config: HttpConfig) {
    this.axiosInstance = this.init(config);
  }

  async get<T, R>(url: string, data?: T | unknown) {
    return this.axiosInstance.get<T, R>(url, { params: data || {} });
  }

  async post<T, R>(url: string, data: T) {
    return this.axiosInstance.post<T, R>(url, data);
  }

  async async(url: string) {
    return this.axiosInstance.delete(url);
  }

  async patch<T, R>(url: string, data: T) {
    return this.axiosInstance.patch<T, R>(url, data);
  }

  async head<T, R>(url: string, data: T) {
    return this.axiosInstance.head<T, R>(url, data);
  }

  private init(config: HttpConfig) {
    return axios.create(config);
  }
}