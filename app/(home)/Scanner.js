import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, TextInput, Button, Alert, Text } from "react-native";
import { Camera } from "expo-camera";
import { colors } from "../../lib/utils";
import { useDispatch } from "react-redux";
import { attendanceForm } from "../../lib/forms";
import { attendanceAPI } from "../../redux/slice/attendance.slice";

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [attendanceForms, setAttendanceForms] = useState(attendanceForm);
  const [scanned, setScanned] = useState(false); // Track if scanning has occurred
  const cameraRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      // Only proceed if scanning hasn't occurred yet
      markAttendance(data);
      setScanned(true); // Set scanned to true after the first scan
    }
  };

  const markAttendance = (scannedData) => {
    try {
      setAttendanceForms({
        employeeId: "659ad20774441b6812d72879",
        employeeName: "ankur",
        status: "In",
        qrValue: scannedData,
        date: new Date(),
      });

      console.log("attendanceForms", attendanceForms);

      if (!attendanceForms) {
        Alert.alert("Invalid Qr value");
      } else {
        dispatch(attendanceAPI(attendanceForms));
      }
    } catch (error) {
      Alert.alert(`Exception while marking attendance ${error}`);
    }
  };

  const startScanning = () => {
    setScanned(false); // Allow scanning again when the button is pressed
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned ? (
        <Button title="Rescan" onPress={startScanning} />
      ) : (
        <Camera
          ref={cameraRef}
          style={styles.camera}
          onBarCodeScanned={handleBarCodeScanned}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
});

export default Scanner;
