import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Redirect } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadAuthState } from "@/store/feature/auth/authSlice";
import { IRootState } from "@/store/store";

type Props = {};

const index = (props: Props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state: IRootState) => state.auth);

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const user = await AsyncStorage.getItem("user");
        if (token && user) {
          dispatch(loadAuthState({ token, user: JSON.parse(user) }));
        }
      } catch (e) {
        console.error("Failed to load auth state from AsyncStorage", e);
      }
    };

    loadAuthData();
  }, [dispatch]);

  return auth.isAuthenticated ? (
    <Redirect href={"/(routes)/welcome"} />
  ) : (
    <Redirect href={"/home"} />
  );
};

export default index;
