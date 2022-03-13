import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthProvider } from "./src/context/AuthContext";
//Components

import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
