import React, { useEffect, useState } from "react";
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
import ReduxProvider from "@/store/provider";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { IRootState } from "@/store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadAuthState } from "@/store/feature/auth/authSlice";

type Props = {};

const RootLayout = (props: Props) => {
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
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(routes)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
