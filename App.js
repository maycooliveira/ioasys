import { StatusBar } from 'expo-status-bar';
import { BaseNavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <BaseNavigationContainer>
      <Stack.Navigator initialRouteName="loginScreen">
        <Stack.Screen name="loginScreen" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </BaseNavigationContainer>
  );
};

export default RootNavigation;
