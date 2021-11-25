//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import DefaultText from './../components/DefaultText';
import MealList from './../components/MealList';

// create a component
const TrendingScreen=props=> {
  
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    if (availableMeals.length === 0) {
        return (
          <View style={styles.content}>
            <DefaultText>No meals found, maybe check your filters?</DefaultText>
          </View>
        );
      }
      return <MealList listData={availableMeals} navData={props.navigation} />;
   
}

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
export default TrendingScreen;
