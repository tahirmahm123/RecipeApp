import React from 'react';
import { View, FlatList, StyleSheet ,Text} from 'react-native';
import baseUrl from "../../services/BaseUrl";

import MealItem from './MealItem';

const MealList = props => {
 
  const renderMealItem = itemData => {
  
   return (
      <MealItem
        title={itemData.item.title}
        image={baseUrl+itemData.item.imageUri[0].url}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navData.navigate({
            name: 'MealDetails',
            params: {
              mealId: itemData.item.id,
              mealTitle:itemData.item.title
            }
       
          });
        }}
      />
    ); 
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default MealList;
