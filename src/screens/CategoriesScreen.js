//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,FlatList } from 'react-native';

import { CATEGORIES } from './../../data/dummy-data';

import CategoryGridTile from './../components/CategoryGridTile';

// create a component
const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            uri={itemData.item.uri}
            onSelect={() => {
              props.navigation.navigate({
                name: 'CategoryMeals',
                params: {
                  categoryId: itemData.item.id
                }
              });
            }}
          />
        );
      };
   
        return (
            <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
          />
        );
    
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
export default CategoriesScreen;
