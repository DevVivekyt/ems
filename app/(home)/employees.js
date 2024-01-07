import { Pressable, StyleSheet, View, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import EmployeeCard from "../../components/EmployeeCard";
import { useDispatch, useSelector } from "react-redux";
import { employeesAPI } from "../../redux/slice/employee";
import { ActivityIndicator } from "react-native-paper";

const employees = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employeeData);
  const loading = useSelector((state) => state.employeeData.loading);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        dispatch(employeesAPI());
      } catch (error) {
        Alert.alert("Error fetching employee data:", error);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.continer}>
        <Ionicons
          onPress={() => router.back()}
          style={{ marginLeft: 10 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Pressable style={styles.searchContainer}>
          <AntDesign
            style={{ marginLeft: 10 }}
            name="search1"
            size={20}
            color="black"
          />
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ flex: 1 }}
            placeholder="Search"
          />
          <View>
            <Pressable>
              <AntDesign
                name="pluscircle"
                size={30}
                color="#0072b1"
                onPress={() => router.push("/(home)/addemployee")}
              />
            </Pressable>
          </View>
        </Pressable>
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={{ flex: 1, justifyContent: "center" }}
        />
      ) : (
        <View>
          {employeeData.empData.length > 0 ? (
            <EmployeeCard data={employeeData.empData} input={input} />
          ) : (
            <View>
              <Pressable>
                <AntDesign
                  name="pluscircle"
                  size={30}
                  color="#0072b1"
                  onPress={() => router.push("/(home)/addemployee")}
                />
              </Pressable>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default employees;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "white" },
  continer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 40,
    flex: 1,
  },
});
