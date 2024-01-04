import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../lib/utils";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import GetLocation from "./GetLocation";

const Header = ({ home }) => {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <View>
        {home ? (
          <GetLocation />
        ) : (
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="black"
            onPress={() => router.back()}
          />
        )}
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
});
