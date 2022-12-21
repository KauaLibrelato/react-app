import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Teste } from "../screens/Teste";
import { Telaaa } from "../screens/Telaaa";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen component={Teste} name="Teste" />
      <Screen component={Telaaa} name="Telaaa" />
    </Navigator>
  );
}
