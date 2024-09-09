import { Colors, Fonts } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /*********************
   *  WELCOME SCREEN
   *********************/
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  welcomeImage: {
    width: 210,
    height: 196,
    marginBottom: 55,
  },
  textContainer: {
    paddingHorizontal: 30,
  },
  welcomeHeading: {
    fontSize: 28,
    fontFamily: Fonts.Jakarta.BOLD,
    textAlign: "center",
    marginBottom: 20,
  },
  welcomeDesc: {
    textAlign: "center",
    color: Colors.TEXT.SECONDARY,
    fontSize: 16,
    marginBottom: 40,
  },

  /*********************
   *  ONBOARDING SCREEN
   *********************/
});
