import React from "react";
import { Link, Stack } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type Props = {};

const _layout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen
        name="registerform"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "white",
          },
          headerLeft: () => {
            return (
              <Link href={"/(routes)/register"}>
                <FontAwesome6 name="chevron-left" size={24} color="black" />
              </Link>
            );
          },
        }}
      />
    </Stack>
  );
};

export default _layout;
