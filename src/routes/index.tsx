import React from "react";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";

import { toastConfig } from "../utils/ToastConfig/toastConfig";
import { AppStackRoutes } from "./app.stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppStackRoutes />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}

export default Routes;
