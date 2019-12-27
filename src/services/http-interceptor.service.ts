import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.
  interceptors.
  request.
  use(
    (config: any) => {
      config.headers.crossDomain = true;
      return config;
    }, (err: any) => {
      return Promise.reject(err);
    }
  );

axiosInstance.
  interceptors.
  response.
  use(
    (response: AxiosResponse): any => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        return Promise.reject(error);
      }
    }
  );

export default axiosInstance;