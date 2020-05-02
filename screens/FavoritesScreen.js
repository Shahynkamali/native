import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MealList from '../components/MealList';
import {MEALS} from '../data/data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';
const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return (
    <MealList
      navigation={props.navigation}
      meals={favMeals}
    />
  )
}

FavoritesScreen.navigationOptions = navData =>{
  return {
      headerTitle: 'Favorites Screen',
      headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
          title="Menu" 
          iconName="ios-menu" 
          onPress={()=>{
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    )
  }
    
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen
