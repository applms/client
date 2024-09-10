import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React from "react";
import { styles } from "@/styles/auth";
import { useFormik } from "formik";
import { ILogin, IRegister } from "@/types/forms";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {
  initialReisterValues,
  validationRegisterSchema,
} from "@/forms/register";

type Props = {};

const Registerform = (props: Props) => {
  const formik = useFormik<IRegister>({
    initialValues: initialReisterValues,
    validationSchema: validationRegisterSchema,
    onSubmit: (values: ILogin) => {
      console.log(values);
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            paddingTop: 50,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ marginBottom: 60 }}>
            <Text
              style={[styles.loginHeading, { textAlign: "left", fontSize: 18 }]}
            >
              Entre your details
            </Text>
          </View>
          <View style={{ marginBottom: 100, rowGap: 20 }}>
            <CustomInput
              placeholder="User name"
              onchange={formik.handleChange("username")}
              value={formik.values.username}
              error={
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : ""
              }
            />
            <CustomInput
              placeholder="Email"
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
          <CustomButton title="Register" onPress={formik.submitForm} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Registerform;
