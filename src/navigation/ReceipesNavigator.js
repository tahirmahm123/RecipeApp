import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './../screens/CategoriesScreen';
import CategoryMealsScreen from './../screens/CategoryMealsScreen';
import FavoritesScreen from './../screens/FavoritesScreen';
import FiltersScreen from './../screens/FiltersScreen';
import MealsDetailsScreen from './../screens/MealsDetailsScreen';
import MealsScreen from './../screens/MealsScreen';
import TrendingScreen from './../screens/TrendingScreen';

const HomeTabStack=createMaterialTopTabNavigator({
    Categories:{
        screen:CategoriesScreen
    },
    Trends:{
        screen:TrendingScreen
    }
})

const BottomBarStack=createBottomTabNavigator(
   { 
       Home:{
        screen:HomeTabStack
        },
       Meals:{
           screen:CategoriesScreen
       },
       Filters:{
           screen:FiltersScreen
       },
       Favorites:{
           screen:FavoritesScreen
       }
}
)

export default createAppContainer(BottomBarStack);
