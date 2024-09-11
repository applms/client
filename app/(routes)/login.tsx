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
import { Link } from "expo-router";
import { useLoginMutation } from "@/store/feature/auth/authApi";
import defaultStyle from "@/constants";

type Props = {};

const LoginScreen = (props: Props) => {
  const [login, { data, error, isError, isSuccess }] = useLoginMutation();
  console.log(data);

  const formik = useFormik({
    initialValues: initialLoginValues,
    validationSchema: validationLoginSchema,
    onSubmit: (values: ILogin) => {
      login(values).unwrap();
    },
  });

  return (
    <ScrollView style={{ flex: 1, height: "100%", backgroundColor: "white" }}>
      <View style={styles.loginContainer}>
        <View style={{ marginBottom: 60 }}>
          <Text style={styles.loginHeading}>Welcome back!</Text>
          <Text style={styles.loginHeading}>Sign in to continue!</Text>
        </View>
        {isError && (
          <View style={defaultStyle.messageErrorContainer}>
            <Text style={defaultStyle.messageErrorText}>
              Email or Password incorrect or Somthing Error.
            </Text>
          </View>
        )}
        <View>
          <CustomInput
            placeholder="user name"
            onchange={formik.handleChange("email")}
            value={formik.values.email}
            textContentType="emailAddress"
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
          <CustomInput
            placeholder="********"
            isSecure
            onchange={formik.handleChange("password")}
            value={formik.values.password}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
          />
        </View>
        <CustomButton title="Log in" onPress={formik.submitForm} />
        <Text style={styles.loginQuestion}>Don't have an account?</Text>
        <Link href={"/(routes)/register"} style={styles.loginQuestionLink}>
          Register
        </Link>
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
