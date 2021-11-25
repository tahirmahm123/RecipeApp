import React, { useState } from 'react';

import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { Text } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import {createStore , combineReducers} from 'redux';


import mealsReducer from './store/meals.reducer';


import RootNavigator from './src/navigation/RootNavigator';
enableScreens();

const rootReducer=combineReducers({
  meals:mealsReducer
});

const store=createStore(rootReducer)

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!loaded) {
    console.log("Found Error Here");
    return (
      <Text> Loading ho ri sabar kr bey</Text>
      // <AppLoading
      //   startAsync={fetchFonts}
      //   onFinish={() => setFontLoaded(true)}
      // />
    );
  }
  return( 
    <Provider store={store}>
     <RootNavigator/>
    </Provider>
 );
}
