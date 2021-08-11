import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MapScreen from '../screens/MapScreen';
import SearchScreen from '../screens/SearchScreen';
import {THEME} from '../theme';

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: THEME.MAIN_COLOR,
          tabBarInactiveTintColor: THEME.DISABLED_COLOR,
          tabBarLabelStyle: {fontSize: 12},
          headerTitleAlign: 'center',
          headerTintColor: THEME.MAIN_COLOR,
        }}>
        <Tab.Screen
          name="Location"
          component={MapScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="md-map-outline" size={30} color={color} />
            ),
            tabBarLabel: 'Map',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="search" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
