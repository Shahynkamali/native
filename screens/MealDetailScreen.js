import React from 'react'
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MEALS } from '../data/data';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => <View style={styles.listItem}><DefaultText>{props.children}</DefaultText></View>;

const MealDetailScreen = props => {
  const mealID = props.navigation.getParam('mealID');
  const selectedMeal = MEALS.find(meal => meal.id === mealID);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      	<View style={styles.details}>
					<DefaultText>
						{selectedMeal.duration} M
					</DefaultText>
					<DefaultText>
						{selectedMeal.complexity.toUpperCase()}
					</DefaultText>
					<DefaultText>
						{selectedMeal.affordability.toUpperCase()}
					</DefaultText>
				</View>
        <Text style={styles.title}>
          Ingredients
        </Text>
          {selectedMeal.ingredients.map((ingredient)=><ListItem  key={ingredient}>{ingredient}</ListItem>)}
           <Text style={styles.title}>
          Steps
        </Text>
          {selectedMeal.steps.map((step)=><ListItem key={step}>{step}</ListItem>)}
      <View style={styles.screen}>
        <Button title="Go back" onPress={()=> props.navigation.popToTop()}/>
      </View>
    </ScrollView>
  )
}


MealDetailScreen.navigationOptions = (navigationData) => {
    const mealID = navigationData.navigation.getParam('mealID');
    const selectedMeal = MEALS.find(meal => meal.id === mealID);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => 
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item 
        title='favorite'
        iconName="ios-star"
        onPress={()=>{console.log('sdds')}}
      />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
  },
  listItem : {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  }
})

export default MealDetailScreen
