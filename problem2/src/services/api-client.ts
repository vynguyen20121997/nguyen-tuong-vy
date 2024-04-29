import axios from "axios";
import config from "../app/config";

const apiClient = axios.create({
  baseURL: config.apiURL,
  timeout: 10000,
});


apiClient.interceptors.request.use((config) => {

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status) {
      return Promise.reject(error);
    }
  }
);


export default apiClient;
