//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from './../components/MealList';
import { useSelector } from 'react-redux';
import DefaultText from './../components/DefaultText';

// create a component
const FavoritesScreen = props => {
    const favMeals = useSelector(state=>state.meals.favoriteMeals);

   
    if(favMeals.length===0||!favMeals){
        return(
          <View style={styles.content}>
          <DefaultText>No favorite meals found.start adding some!</DefaultText>
    
          </View>
        )
      }
      return <MealList listData={favMeals} navData={props.navigation} />;
    
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});

//make this component available to the app
export default FavoritesScreen;
