import React,{useState, useEffect, useCallback} from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { CustomHeaderButton } from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';

const FilterSwitch  = props => (
  <View style={styles.container}>
    <Text>
     {props.label}
    </Text>
    <Switch
      trackColor={{ true: Colors.primaryColor }}
      thumbColor={Colors.accentColor}
      value={props.state}
      onValueChange={props.onChange}
    />
  </View>
)

const FilterScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      veganFree: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    }
    console.log(appliedFilters);
  },[isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    })
  },[saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters / restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
       <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
       <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
       <FilterSwitch
        label="Lactose Free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
    </View>
  )
}
FilterScreen.navigationOptions = navData => {
  return {
      headerTitle: 'Filter Screen',
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
    ),
     headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
          title="Save" 
          iconName="ios-save" 
          onPress={ navData.navigation.getParam('save') }
        />
      </HeaderButtons>
    )
  }    
}



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign:"center",
  }
})

export default FilterScreen
