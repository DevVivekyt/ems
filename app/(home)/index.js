import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../lib/utils";
import Header from "../../components/Header";
import Body from "../../components/Body";

const index = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={[colors.gradientFirst, colors.gradientSecond]}
        style={{ flex: 1 }}
      >
        <Header />
        <Body />
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
