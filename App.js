import './src/configs/ReactotronConfig';
import { BaseNavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import LoginScreen from './src/screens/LoginScreen';
import store from './src/store';
const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <BaseNavigationContainer>
        <Stack.Navigator initialRouteName="loginScreen">
          <Stack.Screen
            name="loginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </BaseNavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
