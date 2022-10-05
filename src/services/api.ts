import axios from "axios";

export const urlBackend =
  process.env.NODE_ENV === "production" ? "http://ip:8080" : "http://ip:8080";

const api = axios.create({
  baseURL: urlBackend,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
    "Content-Type": "application/json",
    "Accept-Encondig": "gzip, deflate, br",
  },
});

export default api;
