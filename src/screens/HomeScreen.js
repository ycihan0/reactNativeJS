import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "../../components/Information";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <Information
        title="Angular Eğitimi"
        imageSource={require("../../assets/angular.jpg")}
        desc="Kapsamlı Angular Eğitimi"
      />
      <Information
        title="Bootstrap 5 Eğitimi"
        imageSource={require("../../assets/bootstrap5.png")}
        desc="Kapsamlı ABootstrap 5 Eğitimi"
      />
      <Information
        title="C Programlama Eğitimi"
        imageSource={require("../../assets/c.png")}
        desc="Kapsamlı C Programlama Eğitimi"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
