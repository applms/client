import { Colors, Fonts } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  buttonIcon: {
    width: 28,
    height: 28,
    position: "absolute",
    left: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: Fonts.Jakarta.BOLD,
  },
});
