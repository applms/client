import { IInitialAuthState } from "@/types/store/auth";
import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getTokenFromLocalStorage = async () => {
  const token = await AsyncStorage.getItem("token");
  console.log("get token from local storage", token);
  return token ? token : null;
};

// Function to get user from local storage
export const getUserFromLocalStorage = async () => {
  const user = await AsyncStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const initialAuthSlice: IInitialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthSlice,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticated = true;
      AsyncStorage.setItem("token", token);
      AsyncStorage.setItem("user", JSON.stringify(user));
    },
    // Logout action (clear state and localStorage)
    logout: state => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("user");
    },

    loadAuthState: (state, action) => {
      const { token, user } = action.payload;
      if (token) {
        state.token = token;
        state.user = user;
        state.isAuthenticated = true;
      }
    },
  },
});

// Export actions
export const { loginSuccess, logout, loadAuthState } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
