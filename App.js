import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoursesScreen from "./src/screens/CoursesScreen";
import CoursesInformaiton from "./src/screens/CoursesInformaiton";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="Kurslarım" component={CoursesScreen} />
        <Stack.Screen name="KursBilgilerim" component={CoursesInformaiton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
