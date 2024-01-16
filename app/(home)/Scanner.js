import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { Camera } from "expo-camera";
import { colors } from "../../lib/utils";

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState("");
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
  };

  useEffect(() => {
    if (scanned) {
      console.log("Scanned Data:", scannedData);
      setScanned(false);
    }
  }, [scanned, scannedData]);

  const startScanning = () => {
    setScanned(false);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!scanned ? (
        <Camera
          ref={cameraRef}
          style={styles.camera}
          onBarCodeScanned={handleBarCodeScanned}
        />
      ) : (
        <>
          <TextInput
            mode="outlined"
            placeholder="Jome@example.com"
            placeholderTextColor={colors.gray}
            label="Email"
            keyboardType="email-address"
          />
          <Button title="Start Scanning Again" onPress={startScanning} />
        </>
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
