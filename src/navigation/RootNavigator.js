import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import CategoriesScreen from "./../screens/CategoriesScreen";
import CategoryMealsScreen from "./../screens/CategoryMealsScreen";
import FavoritesScreen from "./../screens/FavoritesScreen";
import FiltersScreen from "./../screens/FiltersScreen";
import MealsDetailsScreen from "./../screens/MealsDetailsScreen";
import MealsScreen from "./../screens/MealsScreen";
import TrendingScreen from "./../screens/TrendingScreen";
import HomeScreen from './../screens/HomeScreen';
import Colors from './../constants/Colors';

const BottomTab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'OpenSansBold'
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
 
};
const mealsDetailsNavOptions={
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSansBold'
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
}
/**
 * CategoriesStack
 */
function CategoriesStack() {
  return (
    <Stack.Navigator
    screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="Meals" component={MealsScreen} />
      <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}

function TopbarNavigator() {
  return (
    <Tab.Navigator
      screenOptions = {
        {
          "tabBarActiveTintColor": "#FE802B",
          "tabBarInactiveTintColor": "#6B6133",
          "tabBarLabelStyle": {
            "fontSize": 12
          },
          "tabBarStyle": [{
            "display": "flex"
          }, null]
        }
      }
    >
      <Tab.Screen name="Categories" component={CategoriesStack} />
      <Tab.Screen name="Trending" component={TrendingScreen} />
    </Tab.Navigator>
  );
}

/**
 * MealsStack
 */
function MealsStack() {
  return (
    <Stack.Navigator
    screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Meals" component={MealsScreen} />
      <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Navigator>
  );
}

function FilterStack() {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Filters" component={FiltersScreen} />
      <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}
function FavoritesStack(){
  return(
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
    </Stack.Navigator>
  )
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions = {
          {
            "tabBarActiveTintColor": "#FE802B",
            "tabBarInactiveTintColor": "#6B6133",
            "tabBarLabelStyle": {
              "fontSize": 12
            },
            "tabBarStyle": [{
              "display": "flex"
            }, null]
          }
        }
      >
        <BottomTab.Screen
          name="Home"
          component={CategoriesStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
            headerTitle:'Home'
          }}
        />
        <BottomTab.Screen
          name="Mealss"
          component={MealsStack}
          options={{
            tabBarLabel: "Meals",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="restaurant-menu" color={color} size={size} />
            )
          }}
        />
        <BottomTab.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            )
          }}
        />
        <BottomTab.Screen
          name="Filters"
          component={FilterStack}
          options={{
            tabBarLabel: "Filters",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="filter" color={color} size={size} />
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
