import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="Frontend/FormScreen" options={{ title: "Form" }} />
        <Stack.Screen
          name="Frontend/ResultScreen"
          options={{ title: "Result" }}
        />
        <Stack.Screen
          name="Frontend/NotFound"
          options={{ title: "Not Found" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
