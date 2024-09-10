import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useFormik } from "formik";

import CustomButton from "@/components/CustomButton";
import { styles } from "@/styles/auth";
import { BGVARIANT, TEXTVARIANT } from "@/types/button";
import { Icons } from "@/constants";
import CustomInput from "@/components/CustomInput";
import { initialLoginValues, validationLoginSchema } from "@/forms/login";
import { ILogin } from "@/types/forms";
import { Link, router } from "expo-router";

type Props = {};

const RegisterScreen = (props: Props) => {
  return (
    <ScrollView style={{ flex: 1, height: "100%", backgroundColor: "white" }}>
      <View style={styles.loginContainer}>
        <View style={{ marginBottom: 60 }}>
          <Text style={styles.loginHeading}>Welcome!</Text>
          <Text style={styles.loginHeading}>Sign up to continue!</Text>
        </View>
        <CustomButton
          title="Sign Up with Google"
          bgVariante={BGVARIANT.GRAY}
          textVariante={TEXTVARIANT.GRAY}
          icon={Icons.Google}
        />
        <Text style={styles.loginOrText}>Or</Text>
        <CustomButton
          title="Sign up with email"
          bgVariante={BGVARIANT.GRAY}
          textVariante={TEXTVARIANT.GRAY}
          onPress={() => router.push("/(routes)/registerform")}
        />
        <Text style={styles.loginQuestion}>Already have an account?</Text>
        <Link href={"/(routes)/login"} style={styles.loginQuestionLink}>
          Login
        </Link>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
