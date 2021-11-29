//import liraries
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet,Image,ScrollView} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector,useDispatch} from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Meal from './../../services/Meal'
import { toggleFavorite } from './../../store/meals.actions';

const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
      </View>
    );
  };
 
// create a component
const MealsDetailsScreen =props=> {
 const {navigation,route}=props;
 const {mealId,mealTitle}=props.route.params;
    console.log("mealId:"+mealId+"--mealTile::"+mealTitle);
    const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState({});
  useEffect(() => {
    Meal.findOne(mealId)
      .then((response) => {
        setSelectedMeal(response);
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
  /**
   * Customizing Headerbar with Favorite button
   */
  // React.useLayoutEffect(() => {
  //     // const toggleFavorite=navigationData.navigation.getParam('toggleFav');
  //     // const isFavorite=navigationData.navigation.getParam('isFav');
  //     navigation.setOptions({
  //         headerStyle: {
  //             backgroundColor:'transparent',
  //           },
  //           headerTransparent: true,
  //         headerTitle: route.params.mealTitle,
  //     });
  //   }, []);
    
        return (
            <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
              <DefaultText>{selectedMeal.duration}m</DefaultText>
              <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
              <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <Text style={{ marginLeft: '5%', marginRight: '5%' }}>{selectedMeal.ingredients}</Text>
            <Text style={styles.title}>Steps</Text>
            <Text style={{ marginLeft: '5%', marginRight: '5%' }}>{selectedMeal.steps}</Text>
          </ScrollView>
        );
    }
 
    MealsDetailsScreen.options = navigationData => {
        const mealTitle='mealTitle';//navigationData.navigation.getParam('mealTitle');
       const isFavorite='true';
       /*  const mealId = navigationData.navigation.getParam('mealId');
        const selectedMeal = MEALS.find(meal => meal.id === mealId); */
        return {
          headerTitle: 'mealTitle',
         /*  headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName={isFavorite?"ios-star":"ios-star-outline"}
                onPress={toggleFavorite}
              />
            </HeaderButtons>
          ) */
        };
      };
      
// define your styles
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
      },
      details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
      },
      title: {
        fontFamily: 'OpenSansBold',
        fontSize: 22,
        textAlign: 'center'
      },
      listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
      }
});

//make this component available to the app
export default MealsDetailsScreen;
