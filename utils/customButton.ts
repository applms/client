import { Colors } from "@/constants";
import { BGVARIANT, TEXTVARIANT } from "@/types/button";
import { TextStyle, ViewStyle } from "react-native";

export const getBgVariant = (variant: BGVARIANT): ViewStyle => {
  switch (variant) {
    case BGVARIANT.SECONDE:
      return {
        backgroundColor: "transparent",
        borderWidth: 1.5,
        borderColor: Colors.GRAY,
      };
      break;

    default:
      return {
        backgroundColor: Colors.PRIMARY,
      };
      break;
  }
};

export const getTextVariant = (variant: TEXTVARIANT): TextStyle => {
  switch (variant) {
    case TEXTVARIANT.SECONDE:
      return {
        color: Colors.PRIMARY,
      };

    default:
      return {
        color: "white",
      };
  }
};
