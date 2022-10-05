import React from "react";
import { BaseToast } from "react-native-toast-message";
import { useTheme } from "styled-components";
import { closeToast } from "../../components/Toaster";

const theme = useTheme();

export const toastConfig = {
  success: ({ text1, ...rest }: any) => (
    <BaseToast
      {...rest}
      style={{
        width: "",
        height: 0,
        borderRadius: 0,
        borderLeftColor: "",
        backgroundColor: "",
      }}
      onTrailingIconPress={() => closeToast()}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      text1={text1}
      text1Style={{
        color: "",
        fontSize: 0,
        fontWeight: "",
        fontFamily: "",
        paddingBottom: 0,
      }}
    />
  ),
  danger: ({ text1, ...rest }: any) => (
    <BaseToast
      {...rest}
      style={{
        color: "",
        fontSize: 0,
        fontWeight: "",
        fontFamily: "",
        paddingBottom: 0,
      }}
      onTrailingIconPress={() => closeToast()}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      text1={text1}
      text1Style={{
        color: "",
        fontSize: 0,
        fontWeight: "",
        fontFamily: "",
        paddingBottom: 0,
      }}
    />
  ),
};
