import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import RNBluetoothClassic from "react-native-bluetooth-classic";

export function Teste() {
  const navigation = useNavigation();
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", marginTop: 150 }}
    >
      <Text>Teste</Text>
      <Button title="TEste" onPress={() => navigation.navigate("Telaaa")} />
    </View>
  );
}
