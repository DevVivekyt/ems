import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import * as React from "react";
import Header from "../../components/Header";
import QRCode from "react-native-qrcode-svg";
import { useDispatch, useSelector } from "react-redux";
import { generateQrAPI } from "../../redux/slice/qrSlice";
import { ActivityIndicator } from "react-native-paper";

const QrCode = () => {
  const dispatch = useDispatch();
  const QrValue = useSelector((state) => state.qrData.QrData.randomValue);
  console.log("QrValue", QrValue);
  const loading = useSelector((state) => state.qrData.loading);
  console.log("loading", loading);

  const fetchQrValueData = async () => {
    try {
      dispatch(generateQrAPI());
    } catch (error) {
      Alert.alert("Error fetching QR data:", error);
    }
  };

  React.useEffect(() => {
    fetchQrValueData();
    const intervalId = setInterval(fetchQrValueData, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      {loading ? (
        <ActivityIndicator
          size="large"
          style={{ flex: 1, justifyContent: "center" }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <QRCode
            value={QrValue}
            size={300}
            logo={require("../../assets/images/man.png")}
          />
        </View>
      )}
    </View>
  );
};

export default QrCode;

const styles = StyleSheet.create({});
