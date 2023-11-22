import { View, Text, Button } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import styles from "../../css";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";

const About = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate("Home");
  };
  const goToContact = () => {
    navigation.navigate("Contact", {
      token: "this is from about",
      abc: "blue",
    });
  };
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Button title="Home" onPress={goToHome} />
      <Button title="Contact" onPress={goToContact} />
      {/* <TouchableOpacity
        activeOpacity={0.2}
        style={styles2.press}
        onPress={goToHome}
      >
        <Text style={styles2.pressText}>This Is</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default About;
const styles2 = StyleSheet.create({
  press: {
    backgroundColor: "#56089e",
    borderRadius: 8,
  },
  pressText: {
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 20,
  },
});
