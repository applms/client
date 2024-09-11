import { StyleSheet } from "react-native";
import Fonts from "./Fonts";
import Colors from "./Colors";

export { default as Fonts } from "./Fonts";
export { default as Colors } from "./Colors";
export { default as Images } from "./Images";
export { default as Icons } from "./Icons";

const styles = StyleSheet.create({
  messageErrorContainer: {
    backgroundColor: Colors.ERROR,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  messageErrorText: {
    color: "white",
    fontFamily: Fonts.Jakarta.SEMIBOLD,
    fontSize: 12,
  },
});

export default styles;
