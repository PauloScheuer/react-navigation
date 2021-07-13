import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <TabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default Routes;