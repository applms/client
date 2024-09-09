import { ViewStyle } from "react-native";

export enum BGVARIANT {
  PRIMARY = "PRIMARY",
  SECONDE = "SECONDE",
}
export enum TEXTVARIANT {
  PRIMARY = "PRIMARY",
  SECONDE = "SECONDE",
}

export interface ICustomButton {
  title: string;
  onPress?: () => void;
  bgVariante?: BGVARIANT;
  textVariante?: TEXTVARIANT;
  style?: ViewStyle;
}
