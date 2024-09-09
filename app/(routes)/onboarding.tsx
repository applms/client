import React from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { styles } from "@/styles/onboarding";
import { IOnboardingSwiperDataType } from "@/types/onboarding";
import { onboardingSwiperData } from "@/utils/onboardingData";
import { Colors } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { BGVARIANT, TEXTVARIANT } from "@/types/button";

type Props = {};

const renderItem = ({ item }: { item: IOnboardingSwiperDataType }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Image source={item.image} style={styles.welcomeImage} />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeHeading}>{item.heading}</Text>
        <Text style={styles.welcomeDesc}>{item.desc}</Text>
      </View>
    </View>
  );
};

const index = (props: Props) => {
  return (
    <View style={{ paddingVertical: 100, paddingHorizontal: 20, flex: 1 }}>
      <AppIntroSlider
        data={onboardingSwiperData}
        renderItem={renderItem}
        activeDotStyle={{ borderWidth: 3, borderColor: "black" }}
        showNextButton={false}
      />
      <CustomButton
        title="Register"
        textVariante={TEXTVARIANT.PRIMARY}
        style={{ marginBottom: 10 }}
      />
      <CustomButton
        title="Log in"
        textVariante={TEXTVARIANT.SECONDE}
        bgVariante={BGVARIANT.SECONDE}
      />
    </View>
  );
};

export default index;
