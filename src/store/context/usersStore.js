const { createContext, useState } = require("react");

export const UsersContext = createContext({
  users: [],
  favUsers: [],
  addUser: (data) => {},
  removeUser: (id) => {},
  addFav: (id) => {},
  removeFav: (id) => {},
});

const FavUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [favUsers, setFavUsers] = useState([]);
  const addUser = (data) => {
    setUsers((prevState) => [
      { name: data, id: Math.random().toString() },
      ...prevState,
    ]);
  };
  const removeUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => user.id !== id);
    });
  };
  const addFav = (id) => {
    setFavUsers((prevState) => [id, ...prevState]);
  };
  const removeFav = (id) => {
    setFavUsers((prevState) => {
      return prevState.filter((item) => item !== id);
    });
  };
  const vals = {
    users,
    favUsers,
    addUser,
    removeUser,
    addFav,
    removeFav,
  };
  return <UsersContext.Provider value={vals}>{children}</UsersContext.Provider>;
};
export default FavUsersProvider;
