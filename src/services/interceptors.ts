import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { http } from "./http";

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data.data;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    if (status === 401) {
      window.location.href = "/login";
    }
    if (status === 403) {
      console.error("forbidden");
    }
    if (status && status >= 500) {
      console.error("internal server erorr");
    }
    return Promise.reject(error);
  }
);
