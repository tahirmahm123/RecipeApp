import React from "react";
import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const TrendingScreen = props => {
  const trendingMeals = useSelector(state => state.meals.meals);
    
  if (trendingMeals.length === 0 || !trendingMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found from your searchlist</DefaultText>
      </View>
    );
  }
 
 return <MealList listData={trendingMeals} navigation={props.navigation} />;
};

/* FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
}; */

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TrendingScreen;
