import { ImageSourcePropType, ViewStyle } from "react-native";

export enum BGVARIANT {
  PRIMARY = "PRIMARY",
  SECONDE = "SECONDE",
  GRAY = "GRAY",
}
export enum TEXTVARIANT {
  PRIMARY = "PRIMARY",
  SECONDE = "SECONDE",
  GRAY = "GRAY",
}

export interface ICustomButton {
  title: string;
  onPress?: () => void;
  bgVariante?: BGVARIANT;
  textVariante?: TEXTVARIANT;
  style?: ViewStyle;
  icon?: ImageSourcePropType;
  isLoading?: boolean;
}
