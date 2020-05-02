import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
	return <HeaderButton 
				{...props } 
				iconSize={23} 
				IconComponent={Ionicons}
				color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
			/>
}

const styles = StyleSheet.create({

})

export default CustomHeaderButton;