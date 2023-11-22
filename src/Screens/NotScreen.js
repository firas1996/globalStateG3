import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const NotScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const goToContact = () => {
    navigation.navigate("Contact", { token: "sssssssssssssssssss" });
  };
  return (
    <View>
      <Button title="Contact ....." onPress={goToContact} />
      {/* <Text style={{ color: "red" }}>{route.params.token}</Text> */}
    </View>
  );
};

export default NotScreen;
