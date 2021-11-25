import React,{Component} from 'react';
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabNavigator from './TopTabNavigator';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function BHomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bottom Home!</Text>
    </View>
  );
}

function BSettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Bottom Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const BottomTab = createBottomTabNavigator();
function Root() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="bHome" component={BHomeScreen} />
        <BottomTab.Screen name="bSettings" component={BSettingsScreen} />
      </BottomTab.Navigator>
  );
}

 function Navigator() {
  return (
   <NavigationContainer>
       <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={TopTabNavigator} />
      <BottomTab.Screen name="bHome" component={BHomeScreen} />
        <BottomTab.Screen name="bSettings" component={BSettingsScreen} />
      </BottomTab.Navigator>
   
      </NavigationContainer>
  );
}

export default Navigator;