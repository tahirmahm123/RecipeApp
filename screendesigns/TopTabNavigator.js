import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Categories</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trending</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    
    <Tab.Navigator>
        <Tab.Screen name="Categories" component={HomeScreen} />
        <Tab.Screen name="Trending" component={SettingsScreen} />
    </Tab.Navigator>
     
   
  );
}
