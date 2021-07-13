import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PageOne from '../views/PageOne';
import PageTwo from '../views/PageTwo';
import PageThree from '../views/PageThree';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PageOne">
      <Stack.Screen name="PageOne" component={PageOne} />
      <Stack.Screen name="PageTwo" component={PageTwo} />
      <Stack.Screen name="PageThree" component={PageThree} />
    </Stack.Navigator>
  );
}
export default StackNavigator;