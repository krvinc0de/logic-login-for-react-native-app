//import liraries
import { useTheme } from '@react-navigation/native';
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

// create a component
const ScreenNoAuth = () => {

    const {theme} = useContext(ThemeContext)
  console.log(theme, 'here');

    

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <Text style={[
                {color: theme.colors.text},
            ]}>No auth</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ScreenNoAuth;
