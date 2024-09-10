import { Image, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { styles } from "@/styles/button";
import { BGVARIANT, ICustomButton, TEXTVARIANT } from "@/types/button";
import { getBgVariant, getTextVariant } from "@/utils/customButton";

const CustomButton: FC<ICustomButton> = ({
  onPress,
  title,
  bgVariante = BGVARIANT.PRIMARY,
  style,
  textVariante = TEXTVARIANT.PRIMARY,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, getBgVariant(bgVariante), style]}
      onPress={onPress}
    >
      {icon && <Image source={icon} style={styles.buttonIcon} />}
      <Text style={[styles.buttonText, getTextVariant(textVariante)]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
