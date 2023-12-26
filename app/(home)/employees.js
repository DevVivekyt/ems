import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Base_Uri } from "../../lib/utils";
// import SearchResults from "../../components/SearchResults";

const employees = () => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`${Base_Uri}employee`);
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);

  console.log(employees.result);
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

          {employees.result?.length > 0 && (
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
        </Pressable>
      </View>

      {/* {employees.length > 0 ? (
        <SearchResults data={employees} input={input} setInput={setInput} />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Data</Text>
          <Text>Press on the plus button and add your Employee</Text>
          <Pressable onPress={() => router.push("/(home)/adddetails")}>
            <AntDesign
              style={{ marginTop: 30 }}
              name="pluscircle"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      )} */}
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
