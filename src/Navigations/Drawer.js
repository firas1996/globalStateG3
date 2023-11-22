import { createDrawerNavigator } from "@react-navigation/drawer";
import NativeStack from "./NativeStack";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import DrawerC from "./DrawerC";
const drawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <drawer.Navigator drawerContent={DrawerC}>
      <drawer.Screen name="Stack" component={NativeStack} />
    </drawer.Navigator>
  );
};

export default Drawer;
