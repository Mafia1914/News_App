import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screen/home/HomeScreen';
import TaskScreen from './task/task_screen';
import ProfileScreen from './profile/profile_screen'
import DemoApp from './product/DemoApp';
import AppStateExample from './counter_screen/counter_screen';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#05243E',
        },
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#05243E',
        },
        tabBarHideOnKeyboard: true, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Add Post"
        component={TaskScreen}
        options={{
          tabBarLabel: 'Add Post',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="post" color={color} size={size} />
          ),
        }}
      />
          <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
     

      <Tab.Screen
        name="Produects"
        component={DemoApp}
        options={{
          tabBarLabel: 'produects',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="post" color={color} size={size} />
          ),
        }}
      />

       
      <Tab.Screen
        name="CounterNumber"
        component={AppStateExample}
        options={{
          tabBarLabel: 'produects',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="counter" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function BottomNavigationScreen() {
  return (
    <MyTabs />
  );
}
