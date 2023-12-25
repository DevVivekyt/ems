import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../lib/utils";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.Text}>Empolyee Management System</Text>
      </View>
      <Avatar.Image size={34} source={require("../assets/images/man.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white,
    elevation: 10,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  Text: {
    fontWeight: "600",
    fontSize: 16,
  },
});
