import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./store";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Navigator from "./navigator/navigator";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
