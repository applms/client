import { ImageSourcePropType, TextInputProps, ViewStyle } from "react-native";

export interface ICustomInput extends TextInputProps {
  placeholder: string;
  error?: string;
  onChange?: () => void;
  value: string;
  style?: ViewStyle;
  icon?: ImageSourcePropType;
  isSecure?: boolean;
}
