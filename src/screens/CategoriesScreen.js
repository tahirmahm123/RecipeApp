//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet,Button,FlatList } from 'react-native';
import CategoryGridTile from './../components/CategoryGridTile';
import Categories from "../../services/Categories"
// create a component
const CategoriesScreen = props => {
const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    Categories.fetchAll()
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
            data={data}
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

//make this component available to the app
export default CategoriesScreen;
