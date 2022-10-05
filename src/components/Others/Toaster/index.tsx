import Toast from "react-native-toast-message";

export function showToast(
  type: "success" | "danger",
  text1: string,
  offset?: number
) {
  return Toast.show({
    type,
    text1,
    position: "top",
    topOffset: offset,
  });
}

export function closeToast() {
  return Toast.hide();
}
