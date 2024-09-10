import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { FC, useState } from "react";
import { styles } from "@/styles/customInput";
import { ICustomInput } from "@/types/input";
import { Colors, Icons } from "@/constants";

type Props = {};

const CustomInput: FC<ICustomInput> = ({
  placeholder,
  value,
  icon,
  onchange,
  style,
  isSecure = false,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputContainerField}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Colors.GRAY.THIRD}
          style={styles.inputField}
          secureTextEntry={(isSecure && showPassword) === true}
          onChangeText={onchange}
          value={value}
          {...props}
        />
        {isSecure && (
          <TouchableOpacity
            style={styles.buttonShowPassword}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image source={Icons.Eye} style={styles.buttonShowPasswordIcon} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.inputError}>{error}</Text>}
    </View>
  );
};

export default CustomInput;
