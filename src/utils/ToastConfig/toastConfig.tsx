/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BaseToast } from "react-native-toast-message";
import { X } from "phosphor-react-native";

export const toastConfig = {
  success: ({ text1, ...rest }: any) => (
    <BaseToast
      {...rest}
      style={{
        width: "100%",
        height: 56,
        borderLeftColor: "#D8F3D9",
        backgroundColor: "#D8F3D9",
      }}
      renderTrailingIcon={() => (
        <X weight="regular" size={24} color="#247528" />
      )}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 16,
        justifyContent: "center",
      }}
      text1={text1}
      text1Style={{
        marginTop: 6,
        color: "#247528",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Inter_400Regular",
      }}
    />
  ),
  danger: ({ text1, ...rest }: any) => (
    <BaseToast
      {...rest}
      style={{
        width: "100%",
        height: 56,
        borderLeftColor: "#FFCCCC",
        backgroundColor: "#FFCCCC",
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 16,
        justifyContent: "center",
      }}
      renderTrailingIcon={() => (
        <X weight="regular" size={24} color="#CC0000" />
      )}
      text1={text1}
      text1Style={{
        marginTop: 6,
        color: "#CC0000",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Inter_400Regular",
      }}
    />
  ),
  warning: ({ text1, ...rest }: any) => (
    <BaseToast
      {...rest}
      style={{
        width: "100%",
        height: 56,
        borderLeftColor: "#CDE4FE",
        backgroundColor: "#CDE4FE",
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 16,
        justifyContent: "center",
      }}
      renderTrailingIcon={() => (
        <X weight="regular" size={24} color="#044795" />
      )}
      text1={text1}
      text1Style={{
        marginTop: 6,
        color: "#044795",
        fontSize: 14,
        fontWeight: "400",
        fontFamily: "Inter_400Regular",
      }}
    />
  ),
};
