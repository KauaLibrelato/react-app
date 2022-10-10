import React from "react";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
// import { AppStackRoutes } from "./app.stack.routes";
// import { useAuthContext } from "../hooks/UseAuthContext";
// import { AuthRoutes } from "./auth.stack.routes";
import { toastConfig } from "../utils/ToastConfig/toastConfig";
import { AppStackRoutes } from "./app.stack.routes";

export function Routes() {
  // const { user } = useAuthContext();
  return (
    <NavigationContainer>
      {/* {user ? <AuthRoutes /> : <AppStackRoutes />} */}
      <AppStackRoutes />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}

export default Routes;
