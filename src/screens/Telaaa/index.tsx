import React, { useEffect } from "react";
import { Text, View } from "react-native";
import RNBluetoothClassic from "react-native-bluetooth-classic";

export function Telaaa() {
  console.log(RNBluetoothClassic);
  async function teste() {
    try {
      const connected = await RNBluetoothClassic.isBluetoothAvailable();
      console.log(connected);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    teste();
  }, []);

  return (
    <View style={{ alignItems: "center", marginTop: 150 }}>
      <Text>Telaaa</Text>
    </View>
  );
}
