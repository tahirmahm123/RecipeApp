import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform ,Text} from "react-native";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

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
    headerTitle: 'A Screen'
  };
  
  const MealsNavigator = createStackNavigator(   {
      Categories: {
        screen: CategoriesScreen
      },
      CategoryMeals: {
        screen: CategoryMealsScreen
      },
      MealDetail: MealDetailScreen
    },
    {
      // initialRouteName: 'Categories',
      defaultNavigationOptions: defaultStackNavOptions
    }
  );
  
  const FavNavigator = createStackNavigator(    {
      Favorites: FavoritesScreen,
      MealDetail: MealDetailScreen
    },
    {
      // initialRouteName: 'Categories',
      defaultNavigationOptions: defaultStackNavOptions
    }
  );
  
  const tabScreenConfig = {
   Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
          );
        }, 
        tabBarColor: Colors.primaryColor,
        tabBarLabel:
          Platform.OS === 'android' ? (
            <Text style={{ fontFamily: 'OpenSansBold' }}>Meals</Text>
          ) : (
            'Meals'
          )
      } 
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.accentColor,
        tabBarLabel:
          Platform.OS === 'android' ? (
            <Text style={{ fontFamily: 'OpenSansBold' }}>Favorites</Text>
          ) : (
            'Favorites'
          )
      } 
    }
  };
  
  const MealsFavTabNavigator =
    Platform.OS === 'android'
      ? createMaterialBottomTabNavigator(tabScreenConfig, {
          activeTintColor: 'white',
          shifting: true,
          barStyle: {
            backgroundColor: Colors.primaryColor
          }
        })
      : createBottomTabNavigator(tabScreenConfig, {
          screenOptions: {
            "tabBarActiveTintColor": "#FE802B",
            "tabBarInactiveTintColor": "#6B6133",
            "tabBarLabelStyle": {
              "fontSize": 12
            },
            "tabBarStyle": [{
                "display": "flex"
              },
              null
            ]
          }
        });
  
  const FiltersNavigator = createStackNavigator(
    {
      Filters: FiltersScreen
    },
    {
      // navigationOptions: {
      //   drawerLabel: 'Filters!!!!'
      // },
      defaultNavigationOptions: defaultStackNavOptions
    }
  );
  
  const MainNavigator = createDrawerNavigator(
    {
      MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
          drawerLabel: 'Meals'
        }
      },
      Filters: FiltersNavigator
    },
    {
      contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: 'OpenSansBold'
        }
      }
    }
  );
  
  export default createAppContainer(MainNavigator);
  