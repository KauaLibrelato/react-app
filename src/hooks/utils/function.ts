import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";

import { ILoginRequest } from "./types";

export const loginRequest = async ({ email, password }: ILoginRequest) => {
  const request = await api.post("/api/auth/login", {
    email,
    password,
  });

  return request.data;
};

export const setToken = async ({ token }: { token: string }) => {
  AsyncStorage.setItem("access_token", token);
};
