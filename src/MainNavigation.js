// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import SplashScreen from './compenents/screens/SplashScreen';

import MainTabScreen from './components/screens/MainTabScreen';

const Stack = createStackNavigator();

function MainNavigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabScreen">
        <Stack.Screen
          name="MainTabScreen"
          component={MainTabScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* <Stack.Screen
          name="MainTabScreen"
          component={MainTabScreen}
          options={{
            headerTitleAlign: 'center',
          }}
        /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
