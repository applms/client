import { Colors, Fonts } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  inputContainerField: {
    borderBottomColor: Colors.GRAY.PRIMARY,
    borderBottomWidth: 1,
    marginBottom: 5,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  inputField: {
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: Fonts.Jakarta.MEDIUM,
    color: Colors.GRAY.THIRD,
    flex: 1,
  },
  inputError: {
    fontFamily: Fonts.Jakarta.REGULAR,
    color: Colors.ERROR,
    fontSize: 15,
  },
  buttonShowPassword: {},
  buttonShowPasswordIcon: {
    width: 23,
    height: 23,
  },
});
