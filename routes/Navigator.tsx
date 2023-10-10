import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/Header";
import TopTabBar from "./TopTabBar";

const Navigator = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor="#0e806a" barStyle={"light-content"} />
        <Header />

        <View style={{ flex: 1, backgroundColor: "white" }}>
          <TopTabBar />
        </View>
      </View>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
