import { Axios } from "./axios";

export const http = new Axios({
  baseURL: "/api",
  timeout: 10000,
});
