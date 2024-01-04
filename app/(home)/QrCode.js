import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as React from "react";
import Header from "../../components/Header";
import QRCode from "react-native-qrcode-svg";

const QrCode = () => {
  const [Value, setValue] = React.useState("gekk");
  const { Width, height } = Dimensions.get("window");
  return (
    <View>
      <Header />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: height / 1.5,
        }}
      >
        <QRCode value={Value} size={200} logo={require("../../assets/images/man.png")} />
      </View>
    </View>
  );
};

export default QrCode;

const styles = StyleSheet.create({});
