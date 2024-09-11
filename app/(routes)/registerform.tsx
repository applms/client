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
import defaultStyle from "@/constants";
import { useFormik } from "formik";
import { ILogin, IRegister } from "@/types/forms";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {
  initialReisterValues,
  validationRegisterSchema,
} from "@/forms/register";
import {
  useGetProductsQuery,
  useRegisterMutation,
} from "@/store/feature/auth/authApi";
import { router } from "expo-router";

type Props = {};

const Registerform = (props: Props) => {
  const [register, { data, error, isError, isSuccess }] = useRegisterMutation();
  const formik = useFormik<IRegister>({
    initialValues: initialReisterValues,
    validationSchema: validationRegisterSchema,
    onSubmit: async (values: IRegister) => {
      register(values)
        .unwrap()
        .then(() => {
          console.log("first");
          router.push("/login");
        })
        .catch(() => {});
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
          {isError && (
            <View style={defaultStyle.messageErrorContainer}>
              <Text style={defaultStyle.messageErrorText}>
                Email Already Existe or Somthing Error.
              </Text>
            </View>
          )}
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
