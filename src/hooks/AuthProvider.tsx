/* eslint-disable camelcase */
/* eslint-disable no-console */
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as AuthSession from "expo-auth-session";
import { IUser } from "../utils/types/types";
import { AuthContext } from "./AuthContext";
import api from "../services/api";
import { ILoginRequestResponse } from "./utils/types";
import apiAuth from "../services/apiAuth";

// const { CLIENT_ID } = process.env;
// const { REDIRECT_URI } = process.env;

// interface AuthorizationResponse {
//   params: {
//     access_token: string;
//   };
//   type: string;
// }

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>(null);

  // Carrega infos do user
  useEffect(() => {
    async function loadUserData() {
      const token = await AsyncStorage.getItem("access_token");
      const user_id = await AsyncStorage.getItem("user_id");
      if (token) {
        await apiAuth
          .get(`/api/user/info/${user_id}`)
          .then((res) => {
            setUser({
              email: res.data.email,
              access_token: token as string,
              id: user_id as string,
              name: res.data.name,
              profile_picture: res.data.profile_picture,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    loadUserData();
  }, []);

  // Google Login

  // async function signInWithGoogle() {
  //   try {
  //     const SCOPE = encodeURI("profile email");
  //     const RESPONSE_TYPE = "token";
  //     const userStorageKey = "@appJugasa:user";

  //     const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=https://auth.expo.io/@kaualibrelato/appJugasa&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

  //     const { type, params } = (await AuthSession.startAsync({
  //       authUrl,
  //     })) as AuthorizationResponse;

  //     if (type === "success") {
  //       const response = await fetch(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
  //       );
  //       const userInfo = await response.json();
  //       console.log(userInfo);

  //       const userLogged = {
  //         id: userInfo.id,
  //         access_token: userInfo.access_token,
  //         email: userInfo.email,
  //         name: userInfo.given_name,
  //         profile_picture: userInfo.picture,
  //       };

  //       setUser(userLogged);
  //       await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
  //     }
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   } catch (error: any) {
  //     throw new Error(error);
  //   }
  // }

  // Login

  const signin = async ({ email, password }: ILoginRequestResponse) => {
    await api
      .post("/api/user/login", { email, password })
      .then(async (res) => {
        await AsyncStorage.setItem("access_token", res.data.access_token);
        await AsyncStorage.setItem("user_id", res.data.user.id);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  // Logout

  const signout = async () => {
    setUser(null);
    AsyncStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signout, signin }}>
      {children}
    </AuthContext.Provider>
  );
};
