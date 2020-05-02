import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/CustomHeaderButton';
const CategoriesScreen = props => {

   const renderGridItem = itemData => {  
    return (
      <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={()=> props.navigation.navigate({
            routeName: 'CategoryMeals', 
            params: {
              categoryId: itemData.item.id,
            }
          })}
      />
   )
  }
  
  return (
   <FlatList 
      data={CATEGORIES} 
      renderItem={renderGridItem}
      numColumns={2}
   />
  )
}

CategoriesScreen.navigationOptions = navData => {
  return {
      headerTitle: 'Meal Categories',
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
  },
})

export default CategoriesScreen
