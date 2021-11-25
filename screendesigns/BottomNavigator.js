import React,{Component} from 'react';
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Text, View } from 'react-native';


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



const BottomTab = createBottomTabNavigator();


 function BottomNavigator() {
  return (
   <NavigationContainer>

      <BottomTab.Navigator>
      <BottomTab.Screen name="bHome" component={BHomeScreen} />
        <BottomTab.Screen name="bSettings" component={BSettingsScreen} />
      </BottomTab.Navigator>
      </NavigationContainer>
  );
}

export default BottomNavigator;