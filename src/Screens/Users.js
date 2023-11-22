import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import UserInput from "../Components/UserInput";
import UserItem from "../Components/UserItem";

const Users = () => {
  const [users, setUsers] = useState([]);
  const addUserHandler = (userName) => {
    setUsers((prevState) => [
      ...prevState,
      { name: userName, key: Math.random().toString() },
    ]);
  };
  const removeUser = (key) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.key !== key);
    });
    console.log(key);
    console.log("aa", users);
  };
  return (
    <View style={styles.container}>
      <UserInput addUser={addUserHandler} />
      {/* <Text style={{ fontFamily: "open-sans" }}>fdhgfghfghgf</Text>
      <Text>fdhgfghfghgf</Text> */}
      <View style={styles.users}>
        <FlatList
          data={users}
          renderItem={(user) => (
            <UserItem
              removeUser={removeUser}
              id={user.item.key}
              name={user.item.name}
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
