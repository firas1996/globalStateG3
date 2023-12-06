import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { UsersContext } from "../store/context/usersStore";
import UserItem from "../Components/UserItem";

const FavUsers = () => {
  const ctx = useContext(UsersContext);
  const myFavs = ctx.users.filter((u) => ctx.favUsers.indexOf(u.id) !== -1);
  console.log("ss", myFavs);
  return (
    <View style={styles.vue}>
      <Text style={styles.title}>Fav Users</Text>
      <FlatList
        data={myFavs}
        renderItem={(user) => (
          <UserItem
            id={user.item.id}
            name={user.item.name}
            status={user.item.status}
          />
        )}
      />
    </View>
  );
};

export default FavUsers;

const styles = StyleSheet.create({
  vue: { flex: 1 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 18,
  },
});
