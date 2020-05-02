import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/data';
import MealList from '../components/MealList';


const CategoryMealsScreen = props => {

  const categoryID = props.navigation.getParam('categoryId');  
  const displaydMeals = MEALS.filter(meal => meal.categoryId.indexOf(categoryID) >= 0);

  return (
    <MealList
        navigation={props.navigation}
        meals={displaydMeals}
    />
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
const catID = navigationData.navigation.getParam('categoryId');
const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
 return {
   headerTitle: selectedCategory.title,
 }
}



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen
