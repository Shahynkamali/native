import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import MealItem from '../components/MealItem';

const MealList = props => {

	const renderMealItem = itemData => {
    return (
      <MealItem
          title={itemData.item.title}
          image={itemData.item.imageUrl}
          duration={itemData.item.duration}
          affordability={itemData.item.affordability}
          complexity={itemData.item.complexity}
          onSelectMeal={()=>{
            props.navigation.navigate({
              routeName: 'MealDetailScreen',
              params: {
                mealID: itemData.item.id
              }
            })
          }}
      />
    )
  }
	return (
	<View style={styles.list}>
		<FlatList
			width={'100%'}
			data={props.meals}
			keyExtractor={(item, index)=> item.id}
			renderItem={renderMealItem}
		/>
    </View>
	)

}
const styles = StyleSheet.create({
list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealList;