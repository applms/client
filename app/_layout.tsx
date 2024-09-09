import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from "@expo-google-fonts/plus-jakarta-sans";

import { Stack } from "expo-router";

type Props = {};

const RootLayout = (props: Props) => {
  const [isLogging, setIdLogging] = useState(false);
  const [fontLoaded, setFontLoaded] = useFonts({
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  if (!fontLoaded) return null;
  return (
    <>
      {isLogging ? (
        <View></View>
      ) : (
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(routes)" options={{ headerShown: false }} />
        </Stack>
      )}
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
