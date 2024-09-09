import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "@/styles/onboarding";
import { Images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <View style={styles.welcomeContainer}>
      <Image source={Images.Logo} style={[styles.welcomeImage]} />
      <Text style={styles.welcomeHeading}>Start Learning With eDemy</Text>
      <Text style={[styles.welcomeDesc, { marginBottom: 100 }]}>
        Explore a verity of interactive lesson, video, quizze & assignment
      </Text>
      <CustomButton
        title="Get starting"
        onPress={() => router.push("./onboarding")}
      />
    </View>
  );
};

export default Welcome;
