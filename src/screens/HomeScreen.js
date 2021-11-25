//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TrendingScreen from "./TrendingScreen";
import CategoriesScreen from "./CategoriesScreen";
import CategoryMealsScreen from "./CategoryMealsScreen";

import MealsScreen from './MealsScreen';
import MealsDetailsScreen from './MealsDetailsScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
/**
 * CategoriesStack
 */
function CategoriesStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen name="Meals" component={MealsScreen} />
        <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
      </Stack.Navigator>
    );
  }
  
 
// create a component
const HomeScreen = props=> {
    return (
        <View>
            <Text>Home</Text>
        </View>
  /*       <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: { backgroundColor: "#FE802B", height: 4 },
          style: {
            fontWeight: "bold",
            backgroundColor: "#FBD532",
            height: 60,
            paddingTop: 20
          }
        }}
      >
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Trending" component={TrendingScreen} />
      </Tab.Navigator> */
    );
};
HomeScreen.navigationOptions = navigationData => {
    /*  const catId = navigationData.navigation.getParam('categoryId');
   
     const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
   
     return {
       headerTitle: selectedCategory.title
     }; */
   
     return {
       headerTitle: "title"
     };
   };
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HomeScreen;
