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
      { name: data, id: Math.random().toString(), status: false },
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
    let tempData = users;
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].id == id) tempData[i].status = true;
    }
    setUsers(tempData);
  };
  const removeFav = (id) => {
    setFavUsers((prevState) => {
      return prevState.filter((item) => item !== id);
    });
    let tempData = users;
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].id == id) tempData[i].status = false;
    }
    setUsers(tempData);
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
