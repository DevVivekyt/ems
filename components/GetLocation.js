import { Alert, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import * as Location from "expo-location";

const GetLocation = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = React.useState(
    "we are getting your location!"
  );
  const [LoactionServicesEnabled, setLocationServicesEnabled] =
    React.useState(false);

  React.useEffect(() => {
    checkIfLoactionEnabled();
    getCurrentLoction();
  }, []);

  const checkIfLoactionEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLoction = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "allow the app to use the loaction services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log("response", response);

      for (let item of response) {
        let address = `${item.district} ${item.city} `;
        setDisplayCurrentAddress(address);
      }
    }
  };

  return (
    <View>
      <Text style={styles.Text}>{displayCurrentAddress}</Text>
    </View>
  );
};

export default GetLocation;

const styles = StyleSheet.create({
  Text: {
    fontWeight: "500",
    fontSize: 16,
  },
});
