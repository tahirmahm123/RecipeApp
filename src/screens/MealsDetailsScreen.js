//import liraries
import React, { useCallback, useEffect } from 'react';
import { View, Text, Button, StyleSheet,Image,ScrollView} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector,useDispatch} from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

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
 const {mealId,mealTitle,isFav,toggleFav}=props.route.params;
    //console.log(props.route.params)
    //const mealId = props.route.params.mealId;
    //const mealTitle=props.route.params.mealTitle;
    console.log("mealId:"+mealId+"--mealTile::"+mealTitle);
    const availableMeals=useSelector(state=>state.meals.meals);
     const currentMealIsFavorite = useSelector(state=>
        state.meals.favoriteMeals.some(meal=>meal.id === mealId)
        ); 
 const selectedMeal=availableMeals.find(meal=>meal.id===mealId);

 const dispatch=useDispatch();
 /**
  * setting Favorite dispatch events
  */
 const toggleFavoriteHandler=useCallback(()=>{
    dispatch(toggleFavorite(mealId));
  },[dispatch,mealId]);

  useEffect(()=>{
    //navigation.dispatch(CommonActions.setParams({toggleFav:toggleFavoriteHandler}));
    props.navigation.setParams({toggleFav:toggleFavoriteHandler});
  },[toggleFavoriteHandler]);

  useEffect(()=>{
    //navigation.dispatch(CommonActions.setParams({isFav:currentMealIsFavorite}));
    props.navigation.setParams({isFav:currentMealIsFavorite});
  },[currentMealIsFavorite])
        /**
         * Customizing Headerbar with Favorite button
         */
        React.useLayoutEffect(() => {
           // const toggleFavorite=navigationData.navigation.getParam('toggleFav');
           // const isFavorite=navigationData.navigation.getParam('isFav');
            navigation.setOptions({
                headerStyle: {
                    backgroundColor:'transparent',
                  },
                  headerTransparent: true,
                headerTitle: route.params.mealTitle,
                headerRight: () =>(
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                      <Item
                        title="Favorite"
                        iconName={"ios-star"}
                        iconName={isFav?"md-heart":"md-heart-empty"}
                        onPress={toggleFav}
                        
                      />
                    </HeaderButtons>
                  )
            });
          }, [route]);
    
        return (
            <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
              <DefaultText>{selectedMeal.duration}m</DefaultText>
              <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
              <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
              <ListItem key={step}>{step}</ListItem>
            ))}
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
