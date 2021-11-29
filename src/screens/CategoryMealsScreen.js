import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import DefaultText from "./../../components/DefaultText";
import MealList from './../components/MealList';
import Categories from "../../services/Categories"

const CategoryMealsScreen = props => {
  const { route } = props;

  const catId = route.params?.categoryId ?? "defaultValue";
  console.log("catId::" + catId);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    Categories.findOne(catId)
      .then((response) => {
        setData(response);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response);
      })
  }, [])
  if (loading) return (
    <View style={styles.content}>
      <Text>Please Wait While Data is Laoding</Text>
    </View>
  )

  if (data.meals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }
  return <MealList listData={data.meals} navData={props.navigation} />;
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
