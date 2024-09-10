import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { styles } from "@/styles/auth";
import { BGVARIANT, TEXTVARIANT } from "@/types/button";
import { Icons } from "@/constants";
import CustomInput from "@/components/CustomInput";

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <ScrollView style={{ flex: 1, height: "100%", backgroundColor: "white" }}>
      <View style={styles.loginContainer}>
        <View style={{ marginBottom: 60 }}>
          <Text style={styles.loginHeading}>Welcome back!</Text>
          <Text style={styles.loginHeading}>Sign in to continue!</Text>
        </View>
        <View>
          <CustomInput placeholder="user name" />
          <CustomInput placeholder="********" isSecure />
        </View>
        <CustomButton title="Log in" />
        <Text style={styles.loginOrText}>Or</Text>
        <CustomButton
          title="Sign Up with Google"
          bgVariante={BGVARIANT.GRAY}
          textVariante={TEXTVARIANT.GRAY}
          icon={Icons.Google}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
