import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './router/MealsNavigator'
import { enableScreens } from 'react-native-screens';


enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  })
}

export default function App () {
  const [isFontLoaded, setIsFontLoaded] = useState(false)
  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsFontLoaded(true)}
      />
    )
  }
  return (
    <MealsNavigator/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
