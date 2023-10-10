import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";

export interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>WhatsApp</Text>
        <View style={styles.iconContainer}>
          <Feather name="camera" size={20} color="white" style={styles.icon} />
          <Fontisto name="search" size={20} color="white" style={styles.icon} />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={21}
            color="white"
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#0e806a",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 8,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 20,
  },
});
