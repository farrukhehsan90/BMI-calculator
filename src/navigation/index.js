import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Result from '../screens/Result/Result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}

export default MyStack;
