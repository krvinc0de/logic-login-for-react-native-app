//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useTheme } from '@react-navigation/native';

// create a component
const Screen1Auth = () => {

    const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext)
    

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <Text style={{
                color: theme.colors.text
            }}>Screen1Auth</Text>
            <TouchableOpacity onPress={setDarkTheme} style={{
                width: 100, 
                height: 50,
                backgroundColor: theme.colors.card,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: theme.colors.border,
            }}>
                <Text style={{
                color: theme.colors.text
            }}>  DARKKKK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={setLightTheme}>
                <Text>  light</Text>
            </TouchableOpacity>
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
export default Screen1Auth;
