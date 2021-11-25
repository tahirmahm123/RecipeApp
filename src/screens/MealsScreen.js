import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import DefaultText from '../components/DefaultText';

import MealList from './../components/MealList';

const MealsScreen = props => {
  
  
  const availableMeals = useSelector(state => state.meals.meals);


  if (availableMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }
  return <MealList listData={availableMeals} navData={props.navigation} />;
};

MealsScreen.navigationOptions = navigationData => {
 /*  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  }; */

  return {
    headerTitle: "title"
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealsScreen;
