//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CategoriesScreen from './../screens/CategoriesScreen';


const Tab = createMaterialTopTabNavigator();
// create a component
class HomeProto extends Component {
    state = {
        firstQuery: '',
      };

 
    
    render() {
        const { firstQuery } = this.state;
        const searchbarTheme={
          colors:{
            primary: '#ff0000',
        accent: '#00ff00',
          }
        }
        return (
            <View style={styles.container}>
            <View style={styles.searchbar}>
    <Searchbar
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={firstQuery}
        style={{width:'90%',elevation:0,backgroundColor:'#ff0000'}}
        theme={searchbarTheme}
      />
        </View>
 
        
        </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

      container: {
       
        height:'20%',
        backgroundColor:'#ffff00',
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
      
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation:1,
        padding: 5,
       
      },
      searchbar:{
   
        marginTop:40,
        alignItems:'center'
      }
});

//make this component available to the app
export default HomeProto;
