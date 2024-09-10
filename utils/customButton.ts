import { Colors } from "@/constants";
import { BGVARIANT, TEXTVARIANT } from "@/types/button";
import { TextStyle, ViewStyle } from "react-native";

export const getBgVariant = (variant: BGVARIANT): ViewStyle => {
  switch (variant) {
    case BGVARIANT.SECONDE:
      return {
        backgroundColor: "transparent",
        borderWidth: 1.5,
        borderColor: Colors.GRAY.PRIMARY,
      };
    case BGVARIANT.GRAY:
      return {
        backgroundColor: Colors.GRAY.SECONDE,
      };

    default:
      return {
        backgroundColor: Colors.PRIMARY,
      };
  }
};

export const getTextVariant = (variant: TEXTVARIANT): TextStyle => {
  switch (variant) {
    case TEXTVARIANT.SECONDE:
      return {
        color: Colors.PRIMARY,
      };
    case TEXTVARIANT.GRAY:
      return {
        color: "black",
      };

    default:
      return {
        color: "white",
      };
  }
};
