import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackRoutes } from "./app.stack.routes";
import { useAuthContext } from "../hooks/UseAuthContext";
import { AuthRoutes } from "./auth.stack.routes";

export function Routes() {
  const { user } = useAuthContext();
  return (
    <NavigationContainer>
      {user ? <AuthRoutes /> : <AppStackRoutes />}
    </NavigationContainer>
  );
}

export default Routes;
