import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { UsersContext } from "../store/context/usersStore";

const UserItem = ({ id, name, status }) => {
  // const [isFav, setIsFav] = useState(false);
  const ctx = useContext(UsersContext);
  const handelFav = () => {
    // setIsFav(!isFav);
    if (status) {
      ctx.removeFav(id);
    } else {
      ctx.addFav(id);
    }
    console.log("useres", ctx.users);
    console.log("favU", ctx.favUsers);
  };
  return (
    <View style={styles.userItem}>
      <Text style={styles.userText}>{name}</Text>
      <Pressable onPress={handelFav}>
        <Ionicons
          name={status ? "star" : "star-outline"}
          size={24}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  userItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#ba3232",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userText: {
    color: "white",
    // fontFamily: "open-sans",
  },
});
