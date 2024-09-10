import { Colors, Fonts } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /**************************
   *  LOGIN SCREEN STYLES
   **************************/
  loginContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  loginHeading: {
    fontSize: 30,
    fontFamily: Fonts.Jakarta.SEMIBOLD,
    textAlign: "center",
  },
  loginOrText: {
    marginVertical: 40,
    textAlign: "center",
    fontFamily: Fonts.Jakarta.SEMIBOLD,
    fontSize: 18,
    color: Colors.GRAY.THIRD,
  },
  loginQuestion: {
    textAlign: "center",
    marginTop: 25,
    fontFamily: Fonts.Jakarta.SEMIBOLD,
    color: Colors.GRAY.THIRD,
  },
  loginQuestionLink: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: Fonts.Jakarta.BOLD,
    fontSize: 18,
    color: Colors.PRIMARY,
  },
});
