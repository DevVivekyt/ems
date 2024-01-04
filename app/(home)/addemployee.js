import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as React from "react";
import { Avatar, Button, Card, TextInput } from "react-native-paper";
import { Base_Uri, colors, demoImg } from "../../lib/utils";
import * as ImagePicker from "expo-image-picker";
import { Switch } from "react-native-paper";
import { addEmployeeFroms } from "../../lib/forms";
import Header from "../../components/Header";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

const addemployee = () => {
  const [image, setImage] = React.useState(demoImg);
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
  const [AddEmployee, setAddEmployee] = React.useState(addEmployeeFroms);
  const [isLoading, setIsLoading] = React.useState(false);

  // Toggle for Active
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  //==========

  // To Open Gallery to choose image
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  //========

  // Add Employee
  const _SaveEmployee = async () => {
    if (
      !AddEmployee.employeeName &&
      !AddEmployee.employeeEmail &&
      !AddEmployee.employeePassword &&
      !AddEmployee.employeeConfirmPassword
    ) {
      Alert.alert(
        "Emloyee Name, Email, Password and Confirm Password is Required!"
      );
      return;
    }
    if (AddEmployee.employeePassword !== AddEmployee.employeeConfirmPassword) {
      Alert.alert("Password and Confirm Password do not match!");
      return;
    } else {
      try {
        console.log("AddEmployee", AddEmployee);
        setIsLoading(true);
        const response = await axios.post(
          `${Base_Uri}addEmployee`,
          AddEmployee
        );
        console.log(response?.data);
      } catch (error) {
        Alert.alert("Failed to add employeee", error);
      } finally {
        setIsLoading(false);
      }
    }
    console.log(AddEmployee);
  };
  return (
    <>
      <Header home={false} />
      <ScrollView style={styles.root}>
        <View style={styles.container}>
          <View>
            <Text>Add Employee</Text>
          </View>
          <View style={styles.inputContainer}>
            <Card>
              <Card.Cover source={{ uri: image }} />
              <Card.Content>
                <Avatar.Image
                  size={80}
                  source={{ uri: image }}
                  style={{ marginTop: -40 }}
                />
                <Button onPress={pickImage}>Choose an image</Button>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="Jone Deo"
              placeholderTextColor={colors.gray}
              label="Full Name"
              disabled={isLoading}
              value={AddEmployee.employeeName}
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, employeeName: txt });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="Emp123"
              placeholderTextColor={colors.gray}
              label="Employee Id"
              disabled={isLoading}
              value={AddEmployee.employeeId}
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, employeeId: txt });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="Jome@example.com"
              placeholderTextColor={colors.gray}
              label="Email"
              keyboardType="email-address"
              disabled={isLoading}
              value={AddEmployee.employeeEmail}
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, employeeEmail: txt });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="*****"
              placeholderTextColor={colors.gray}
              label="Password"
              disabled={isLoading}
              right={<TextInput.Icon icon="eye" />}
              value={AddEmployee.employeePassword}
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, employeePassword: txt });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="******"
              placeholderTextColor={colors.gray}
              label="Confirm Password"
              disabled={isLoading}
              right={<TextInput.Icon icon="eye" />}
              value={AddEmployee.employeeConfirmPassword}
              onChangeText={(txt) => {
                setAddEmployee({
                  ...AddEmployee,
                  employeeConfirmPassword: txt,
                });
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="Developer"
              placeholderTextColor={colors.gray}
              label="Designation"
              disabled={isLoading}
              value={AddEmployee.designation}
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, designation: txt });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="8909..."
              placeholderTextColor={colors.gray}
              label="Mobile No.."
              keyboardType="numeric"
              disabled={isLoading}
              value={AddEmployee.phoneNumber}
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, phoneNumber: txt });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="30 Oct..."
              placeholderTextColor={colors.gray}
              label="Date of Birth"
              disabled={isLoading}
              value={AddEmployee.dateOfBirth}
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, dateOfBirth: txt });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="30 Oct..."
              placeholderTextColor={colors.gray}
              label="Joining Date"
              disabled={isLoading}
              value={AddEmployee.joiningDate}
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, joiningDate: txt });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="0000"
              placeholderTextColor={colors.gray}
              label="Salary"
              keyboardType="numeric"
              disabled={isLoading}
              value={
                AddEmployee.salary !== undefined
                  ? AddEmployee.salary.toString()
                  : ""
              }
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, salary: txt });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.toggleBtn}>
              <Text style={{ fontWeight: "bold" }}>Active Employee</Text>
              <View style={styles.toggleBtn}>
                <Text>
                  {isSwitchOn ? <Text>Active</Text> : <Text>Disable</Text>}
                </Text>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Address"
              placeholder="Enter employee address here..."
              multiline={true}
              numberOfLines={4}
              placeholderTextColor={colors.gray}
              value={AddEmployee.address}
              disabled={isLoading}
              onChangeText={(txt) => {
                setAddEmployee({ ...AddEmployee, address: txt });
              }}
            />
          </View>

          <LinearGradient
            colors={[colors.gradientFirst, colors.gradientSecond]}
            style={styles.addBtn}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Button
              onPress={_SaveEmployee}
              style={styles.addBtn}
              loading={isLoading}
            >
              <Text style={styles.buttonText}>Add Employee</Text>
            </Button>
          </LinearGradient>
        </View>
      </ScrollView>
    </>
  );
};

export default addemployee;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "white" },
  container: { padding: 10 },
  inputContainer: { marginVertical: 10 },
  toggleBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
