import axiosInstance from "./http-interceptor.service";

class DataService {
  constructor() {
    // ..
  }

  public get(path: string) {
    return axiosInstance.get(path);
  }

  public post(path: string, data: any) {
    return axiosInstance.post(path, data);
  }

  public put(path: string, data: any, id: number) {
    return axiosInstance.put(path + id + "/", data);
  }

  public delete(path: string, id: number) {
    return axiosInstance.delete(path + id + "/");
  }
}

export const dataService = new DataService();
