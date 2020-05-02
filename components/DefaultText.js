import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const DefaultText = props => <Text style={styles.text}>{props.children}</Text>

const styles = StyleSheet.create({
  text: {
  	fontFamily: 'open-sans-bold'
  }
})

export default DefaultText;