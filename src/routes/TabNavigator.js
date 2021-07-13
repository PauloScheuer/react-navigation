import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageOne from '../views/PageOne';
import PageTwo from '../views/PageTwo';
import PageThree from '../views/PageThree';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="PageOne" tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      tabStyle: {
        justifyContent: 'center'
      },
      labelStyle: {
        fontSize: 20
      }
    }}>
      <Tab.Screen name="PageOne" component={PageOne} />
      <Tab.Screen name="PageTwo" component={PageTwo} />
      <Tab.Screen name="PageThree" component={PageThree} />
    </Tab.Navigator >
  );
}
export default TabNavigator;