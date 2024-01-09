import React from "react";
import { Stack } from "expo-router";

import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../redux/store";

import StackMain from "../stacks/Stacks";
import Main from "../pages/Main";

const persistor = persistStore(store);

const Home = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Stack.Screen options={{ headerShown: false }} />
        <StackMain />
      </PersistGate>
    </Provider>
  );
};

export default Home;
