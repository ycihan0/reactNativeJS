import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Kurslarım" onPress={() => navigation.navigate("Kurslarım")} />
    </View>
  );
}

const styles = StyleSheet.create({});
