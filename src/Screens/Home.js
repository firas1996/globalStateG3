import { View, Text, Button } from "react-native";
import React from "react";
import styles from "../../css";
import NotScreen from "./NotScreen";

const Home = ({ navigation }) => {
  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToContact = () => {
    navigation.navigate("Contact", { token: "this is from home", abc: "red" });
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <NotScreen />
      <Button title="About" onPress={goToAbout} />
      <Button title="Contact" onPress={goToContact} />
    </View>
  );
};

export default Home;
