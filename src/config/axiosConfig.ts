import axios from "axios";
import https from "https";
import { API_URL } from "./general";

axios.defaults.baseURL = API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  httpAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

axiosInstance.interceptors.request.use(
  async (config: any) => {

    //Add condition that have to be fulfilled in order to proceed with a request

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error && error.response && error.response.status === 401) {
      console.log(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
