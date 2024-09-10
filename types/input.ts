import {
  ImageSourcePropType,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
  ViewStyle,
} from "react-native";

export interface ICustomInput extends TextInputProps {
  placeholder: string;
  error?: string;
  onchange?: (e: any) => void;
  value: string;
  style?: ViewStyle;
  icon?: ImageSourcePropType;
  isSecure?: boolean;
}
