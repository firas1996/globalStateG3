import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext, useState } from "react";
import UserInput from "../Components/UserInput";
import UserItem from "../Components/UserItem";
import { UsersContext } from "../store/context/usersStore";

const Users = () => {
  const ctx = useContext(UsersContext);
  return (
    <View style={styles.container}>
      <UserInput />
      {/* <Text style={{ fontFamily: "open-sans" }}>fdhgfghfghgf</Text>
      <Text>fdhgfghfghgf</Text> */}
      <View style={styles.users}>
        <FlatList
          data={ctx.users}
          renderItem={(user) => (
            <UserItem
              id={user.item.id}
              name={user.item.name}
              status={user.item.status}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    width: "96%",
  },
  users: {
    flex: 5,
  },
});
