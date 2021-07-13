import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PageOne from '../views/PageOne';
import PageTwo from '../views/PageTwo';
import PageThree from '../views/PageThree';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="PageOne">
      <Drawer.Screen name="PageOne" component={PageOne} />
      <Drawer.Screen name="PageTwo" component={PageTwo} />
      <Drawer.Screen name="PageThree" component={PageThree} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;