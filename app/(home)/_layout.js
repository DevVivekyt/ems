import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="employees" />
        <Stack.Screen name="addemployee" />
        <Stack.Screen name="Scanner" />
      </Stack>
    </Provider>
  );
}
