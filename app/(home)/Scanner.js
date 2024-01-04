import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { colors } from "../../lib/utils";

const Scanner = () => {
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState("");

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

  return (
    <View style={styles.container}>
      {!scanned ? (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
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
});

export default Scanner;
