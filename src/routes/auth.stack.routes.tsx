import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { tela } from "./app.stack.routes";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen component={tela} name="Name" />
    </Navigator>
  );
}
