import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import DefaultText from '../components/DefaultText';
import Meal from './../../services/Meal'
import MealList from './../components/MealList';

const MealsScreen = props => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    Meal.fetchAll()
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
  if (data.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }
  return <MealList listData={data} navData={props.navigation} />;
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
