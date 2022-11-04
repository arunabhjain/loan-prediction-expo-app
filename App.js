import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Predict from './screens/Predict';
import About from './screens/About';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='HOME'>
        <Drawer.Screen name="HOME" component={Home} />
        <Drawer.Screen name="PREDICT" component={Predict} />
        <Drawer.Screen name="ABOUT" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

