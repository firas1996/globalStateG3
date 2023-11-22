import { View, Text, Button } from "react-native";
import React from "react";
import styles from "../../css";
import NotScreen from "./NotScreen";
import { useRoute } from "@react-navigation/native";

const Contact = ({ navigation, route }) => {
  let token = "";
  let abc = "black";
  // const route = useRoute();
  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };
  if (route.params) {
    token = route.params.token;
    abc = route.params.abc;
  }
  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>

      <Text style={{ color: abc }}>{token}</Text>
      <Button title="Home" onPress={goToHome} />
      <Button title="About" onPress={goToAbout} />
      {/* <Test /> */}
    </View>
  );
};

export default Contact;
