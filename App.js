import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/Navigations/Drawer";
import FavUsersProvider from "./src/store/context/usersStore";
export default function App() {
  return (
    <>
      <FavUsersProvider>
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      </FavUsersProvider>
      <StatusBar style="auto" />
    </>
  );
}
