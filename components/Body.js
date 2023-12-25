import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../lib/utils";
import {
  Ionicons,
  Entypo,
  Octicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Body = () => {
  const router = useRouter();
  return (
    <>
      <View style={styles.root}>
        <Pressable
          style={styles.item}
          onPress={() => router.push("/(home)/employees")}
        >
          <View style={styles.icon}>
            <Ionicons name="ios-people-sharp" size={24} color="black" />
          </View>
          <Text style={styles.text}>Employee List</Text>
        </Pressable>
        <Pressable style={styles.item}>
          <View style={styles.icon}>
            <Ionicons name="ios-people-sharp" size={24} color="black" />
          </View>
          <Text style={styles.text}>Mark Attendance</Text>
        </Pressable>
      </View>
      <View style={styles.reportView}>
        <Pressable style={styles.reportContainer}>
          <View style={styles.reportFirstIcon}>
            <Ionicons name="newspaper-outline" size={24} color="black" />
          </View>
          <Text style={styles.reportText}>Attendance Report</Text>
          <View style={styles.reportSecondIcon}>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </Pressable>
        <Pressable style={styles.reportContainer}>
          <View style={styles.reportFirstIcon}>
            <Octicons name="repo-pull" size={24} color="black" />
          </View>
          <Text style={styles.reportText}>Summary Report</Text>
          <View style={styles.reportSecondIcon}>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </Pressable>
        <Pressable style={styles.reportContainer}>
          <View style={styles.reportFirstIcon}>
            <Octicons name="report" size={24} color="black" />
          </View>
          <Text style={styles.reportText}>All Generate Reports</Text>
          <View style={styles.reportSecondIcon}>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </Pressable>
        <Pressable style={styles.reportContainer}>
          <View style={styles.reportFirstIcon}>
            <Ionicons name="people" size={24} color="black" />
          </View>
          <Text style={styles.reportText}>Overtime Employees</Text>
          <View style={styles.reportSecondIcon}>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        </Pressable>
      </View>
      <View style={styles.otherInfo}>
        <View style={styles.criteria}>
          <View style={styles.otherInfoContainer}>
            <MaterialCommunityIcons
              name="guy-fawkes-mask"
              size={24}
              color="black"
            />
          </View>
          <Text style={{ marginTop: 7 }}>Attendance Criteria</Text>
        </View>
        <View style={styles.workflow}>
          <View style={styles.otherInfoContainer}>
            <Feather name="bar-chart" size={24} color="black" />
          </View>
          <Text style={{ marginTop: 7 }}>Increased Workflow</Text>
        </View>
      </View>
      <View style={styles.otherInfo}>
        <View style={styles.cost}>
          <View style={styles.otherInfoContainer}>
            <MaterialCommunityIcons
              name="guy-fawkes-mask"
              size={24}
              color="black"
            />
          </View>
          <Text style={{ marginTop: 7 }}>Cost Savings</Text>
        </View>
        <View style={styles.performance}>
          <View style={styles.otherInfoContainer}>
            <Feather name="bar-chart" size={24} color="black" />
          </View>
          <Text style={{ marginTop: 7 }}>Employee Performance</Text>
        </View>
      </View>
    </>
  );
};

export default Body;

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 10,
  },
  item: {
    backgroundColor: colors.gray,
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  text: {
    marginTop: 7,
    fontWeight: "600",
  },
  reportView: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  reportContainer: {
    backgroundColor: "#BE93C5",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  reportFirstIcon: {
    padding: 7,
    width: 45,
    height: 45,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  reportText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  reportSecondIcon: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  otherInfo: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 8,
  },
  criteria: {
    backgroundColor: "#f79d00",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  otherInfoContainer: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  workflow: {
    backgroundColor: "#ABCABA",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  cost: {
    backgroundColor: "#D3CCE3",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  performance: {
    backgroundColor: "#bdc3c7",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
