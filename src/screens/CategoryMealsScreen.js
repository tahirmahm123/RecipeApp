import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "./../../data/dummy-data";
import DefaultText from "./../../components/DefaultText";

import MealList from './../components/MealList';

const CategoryMealsScreen = props => {
  const { route } = props;

  const catId = route.params?.categoryId ?? "defaultValue";
  console.log("catId::" + catId);
  // return (<Text>CategoryMeals</Text>)
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navData={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;