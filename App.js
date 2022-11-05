import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./screens/About";
import Home from "./screens/Home";
import Predict from "./screens/Predict";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="HOME" component={Home} />
        <Drawer.Screen name="PREDICT" component={Predict} />
        <Drawer.Screen name="ABOUT" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
