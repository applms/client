"use client";
import React, { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
