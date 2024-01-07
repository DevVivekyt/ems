import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import * as React from "react";
import Header from "../../components/Header";
import QRCode from "react-native-qrcode-svg";
import { useDispatch, useSelector } from "react-redux";
import { generateQrAPI } from "../../redux/slice/qrSlice";
import { ActivityIndicator } from "react-native-paper";

const QrCode = () => {
  const [value, setValue] = React.useState("hello");
  const { height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const QrValue = useSelector((state) => state.qrData);
  const loading = useSelector((state) => state.qrData.loading);
  console.log(loading);

  console.log(QrValue.QrData.randomValue);
  React.useEffect(() => {
    const fetchQrValueData = async () => {
      try {
        dispatch(generateQrAPI());
      } catch (error) {
        Alert.alert("Error fetching QR data:", error);
      }
    };

    fetchQrValueData();

    if (QrValue) {
      setValue(QrValue.QrData.randomValue);
    } else {
      setValue("Hello");
    }

    const intervalId = setInterval(fetchQrValueData, 60000);
    return () => {
      console.log("fetch again");
      clearInterval(intervalId);
    };
  }, [value]);

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
            value={value}
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
