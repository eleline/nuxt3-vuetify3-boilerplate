import axios, { AxiosRequestConfig } from 'axios';

enum ApiMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json'
  }
});

export const request =
  (method: string) =>
  <T>(path: string, options?: AxiosRequestConfig) => {
    // You can add more headers/options

    return instance.request<T>({
      method,
      url: path,
      ...(options && { ...options }),
    });
  };

export const useFetchGet = request(ApiMethod.GET);
export const useFetchPost = request(ApiMethod.POST);
export const useFetchPut = request(ApiMethod.PUT);
export const useFetchPatch = request(ApiMethod.PATCH);
export const useFetchDestroy = request(ApiMethod.DELETE);
