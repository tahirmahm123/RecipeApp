//import liraries
import React, { useCallback,useState,useEffect } from 'react';
import { View, Text, StyleSheet,Switch,Platform} from 'react-native';

import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

import { useDispatch } from 'react-redux';
import {setFilters} from './../../store/meals.actions';

const FilterSwitch=props=>{
    return(
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          trackColor={{true:Colors.primaryColor}}
          thumbColor={Platform.OS==='android'?Colors.primaryColor:''}
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
  
    )
  }
  
// create a component
const FiltersScreen =props=> {
    const { navigation } = props;
    

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
  
    const saveFilters=useCallback(()=>{
        const appliedFilters={
          glutenFree:isGlutenFree,
          lactosFree:isLactoseFree,
          vegan:isVegan,
          vegetarian:isVegetarian
        }
        dispatch(setFilters(appliedFilters));
      },[isGlutenFree,isLactoseFree,isVegan,isVegetarian,dispatch]);
    
      useEffect(()=>{
         
        props.navigation.setParams({save:saveFilters});
        
      },[saveFilters]);

    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {
            props.route.params.save()}}
                />
            </HeaderButtons>)
        });
      }, [navigation]);
           
  
        return (
            <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch
              label="Gluten-free"
              state={isGlutenFree}
              onChange={newValue=>setIsGlutenFree(newValue)}
            />
             <FilterSwitch
              label="Lactose-free"
              state={isLactoseFree}
              onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
              label="Vegan"
              state={isVegan}
              onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
              label="Vegetarian"
              state={isVegetarian}
              onChange={newValue => setIsVegetarian(newValue)}
            />
          </View>
      
        );
   }

// define your styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
      },
      title: {
        fontFamily: 'OpenSansBold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
      },
      filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
        marginVertical: 15
      }
});

//make this component available to the app
export default FiltersScreen;
