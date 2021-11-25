import React,{Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Text, View } from 'react-native';

import TopTabNavigator from './TopTabNavigator';
import CategoriesScreen from './../screens/CategoriesScreen';
import FavoritesScreen from './../screens/FavoritesScreen';

import HomeProto from './../screendesigns/HomeScreen';






const BottomTab = createBottomTabNavigator();


 function RootNavigator() {
  return (
   <NavigationContainer>
       <BottomTab.Navigator>
             <BottomTab.Screen name="Home" component={TopTabNavigator} />
             <BottomTab.Screen name="Meals" component={CategoriesScreen} />
             <BottomTab.Screen name="Favorites" component={FavoritesScreen} />
      </BottomTab.Navigator>
   
      </NavigationContainer>
  );
}

export default RootNavigator;