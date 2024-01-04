import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import Img from "../assets/images/man.png";
import { colors } from "../lib/utils";
import { useDispatch } from "react-redux";
import { employeesAPI } from "../redux/slice/employee";

const EmployeeCard = ({ data, input }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch();

  const fetchEmployeeData = async () => {
    try {
      setRefreshing(true);
      dispatch(employeesAPI());
      setRefreshing(false);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item?.employeeName.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={styles.root}>
                <Card style={{ backgroundColor: colors.white }}>
                  <Card.Content style={styles.card}>
                    <Avatar.Image
                      size={50}
                      source={require("../assets/images/man.png")}
                    />
                    <View>
                      <Text variant="titleLarge" style={styles.title}>
                        {item.employeeName}
                      </Text>
                      <View style={styles.secondryTitleContainer}>
                        <Text variant="bodyMedium" style={styles.secondryTitle}>
                          {item.designation}
                        </Text>
                        <Text variant="bodyMedium" style={styles.secondryTitle}>
                          ({item.employeeId})
                        </Text>
                      </View>
                    </View>
                  </Card.Content>
                </Card>
              </View>
            );
          }
        }}
        keyExtractor={(item) => item.employeeId.toString()}
        onRefresh={fetchEmployeeData}
        refreshing={refreshing}
      />
    </>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 30,
  },
  title: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  secondryTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  secondryTitle: {
    color: "gray",
    textTransform: "capitalize",
  },
});
