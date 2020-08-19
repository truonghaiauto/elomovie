import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';
import themes from '../constants/themes';

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from './HomeScreen';
import DiscoverScreen from './DiscoverScreen';
import LibraryScreen from './LibraryScreen';
import SettingScreen from './SettingScreen';

function MainTabScreen({navigation}) {
  const iconSize = themes.sizes.iconSize.size;
  const unSelectedColor = themes.colors.gray;
  const selectedColor = themes.colors.red;
  const tabBarColor = themes.colors.white;

  const tabBarLabel = {
    tab1: 'Home',
    tab2: 'Movies',
    tab3: 'Videos',
    tab4: 'Settings',
  }
  
  const iconName = {
    tab1: 'home',
    tab2: 'film',
    tab3: 'youtube',
    tab4: 'settings',
  }

  return (
    <Tab.Navigator
      initialRouteName = {tabBarLabel.tab1}
      activeColor={selectedColor}
      inactiveColor={unSelectedColor}
      style={{backgroundColor: tabBarColor}}>

      <Tab.Screen
        name = {tabBarLabel.tab1}
        component={HomeScreen}
        options={{
          tabBarColor: {tabBarColor},
          tabBarLabel: tabBarLabel.tab1,
          tabBarIcon: ({color}) => (
            <Icons
              name={iconName.tab1}
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name={tabBarLabel.tab2}
        component={DiscoverScreen}
        options={{
          tabBarColor: {tabBarColor},
          tabBarLabel: tabBarLabel.tab2,
          tabBarIcon: ({color}) => (
            <Icons name={iconName.tab2} color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name={tabBarLabel.tab3}
        component={LibraryScreen}
        options={{
          tabBarColor: {tabBarColor},
          tabBarLabel: tabBarLabel.tab3,
          tabBarIcon: ({color}) => (
            <Icons name={iconName.tab3} color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name={tabBarLabel.tab4}
        component={SettingScreen}
        options={{
          tabBarColor: {tabBarColor},
          tabBarLabel: tabBarLabel.tab4,
          tabBarIcon: ({color}) => (
            <Icons name={iconName.tab4} color={color} size={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;
