import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

const defaultNavOptions = {
			headerStyle: {
    			backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
			},
			headerTitleStyle: {
				fontFamily: 'open-sans-bold',
			},
			headerBackTitleStyle: {
				fontFamily: 'open-sans'
			},
  			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
}


const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
		  headerTitle: 'Meal Categories',
	},
	CategoryMeals: {
		screen: CategoryMealsScreen,
	},
	MealDetailScreen: {
		screen: MealDetailScreen,
	}
	},{
		defaultNavigationOptions: defaultNavOptions,
	});

const FavNavigator = createStackNavigator({
	Favorites: FavoritesScreen,
	MealDetail: MealDetailScreen,
	},
	{
	defaultNavigationOptions: defaultNavOptions,
	}
)

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo)=> {
				return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
			},
			tabBarColor: Colors.primaryColor,
			tabBarLabel: <Text style={{ fontFamily: 'open-sans-bold'}}>Meals</Text>
		},
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarLabel: 'Favorites!',
			tabBarIcon: (tabInfo)=> {
				return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
			},
			tabBarColor: Colors.primaryColor,

		},
	},
}

const MealsFavTabNavigator = 
	Platform.OS === 'android' 
	? createMaterialBottomTabNavigator(tabScreenConfig, {
		activeColor: Colors.accentColor, 
		shifting: true,
	}) 
	: createBottomTabNavigator(tabScreenConfig,
	{
	tabBarOptions: {
		labelStyle: {
			fontFamily: 'open-sans-bold',
		},
		activeTintColor: Colors.accentColor,
		}
	});


const FiltersNavigator = createStackNavigator({
	Filters: FiltersScreen
}, {
	defaultNavigationOptions: defaultNavOptions,

})

const mainNavigator = createDrawerNavigator(
	{
	MealsFavs: {
		screen: MealsFavTabNavigator,
		navigationOptions: {
			drawerLabel: 'Meals'
		}
	},
	Filters: FiltersNavigator,
	}, 
	{
		contentOptions: {
			activeTintColor: Colors.accentColor,
			labelStyle: {
				fontFamily:'open-sans-bold',
		}
	}
})
	
export default createAppContainer(mainNavigator);