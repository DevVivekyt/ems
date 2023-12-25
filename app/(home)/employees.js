import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import axios from "axios";

const employees = () => {
  const [employee, setEmployee] = React.useState([]);
  React.useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get("http://192.168.29.153/api/employee");
        setEmployee(response.data);
      } catch (error) {
        console.log("getting error while featching employee", error);
      }
    };
    fetchEmployee();
  }, []);
  console.log("employee", employee);

  return (
    <View>
      <Text>employees</Text>
    </View>
  );
};

export default employees;

const styles = StyleSheet.create({});
