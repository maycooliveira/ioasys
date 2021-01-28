import './src/configs/ReactotronConfig';
import { BaseNavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import LoginScreen from './src/screens/LoginScreen';
import store from './src/store';
import CoreScreen from './src/screens/CoreScreen';
const Stack = createStackNavigator();

const appBarConfig = (title = '') => {
  return {
    title: title,
    headerTransparent: false,
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerBackTitleVisible: false,
  };
};

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
          <Stack.Screen name="coreScreen" component={CoreScreen} options={appBarConfig('')} />
        </Stack.Navigator>
      </BaseNavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
