import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoriesScreen from './../screens/CategoriesScreen';
import { createStackNavigator } from "react-navigation-stack";

import TrendingScreen from './../screens/TrendingScreen';

import MealDetailScreen from './../screens/MealDetailScreen';




const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  const MealsNavigator = createStackNavigator(
    {
      Trending: {
        screen: TrendingScreen
      },
     
      MealDetail: MealDetailScreen
    },
  
  );
  return (
    
    <Tab.Navigator
     screenOptions = {{
           "tabBarActiveTintColor": "#FE802B",
           "tabBarInactiveTintColor": "#6B6133",
           "tabBarLabelStyle": {
             "fontSize": 12
           },
           "tabBarStyle": [{
               "display": "flex"
             }, null ]
         }}>
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Trending" component={MealsNavigator} />
    </Tab.Navigator>
     
   
  );
}
