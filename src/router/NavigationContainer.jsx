import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import BottomTab from './BottomTab';
import StackNoAuth from './StackNoAuth';

export const NavigationContainerRoot = () => {

    const [loading, setLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
  
    const {theme} = useContext(ThemeContext)
  
    useEffect(() => {
      setTimeout(() => {
          setIsLogin(true);
          setLoading(false);
      }, 1000);
    }, [])

    if (loading) return <View style={{flex: 1, justifyContent: 'center'}}>
    <Text>Loading...</Text>
    </View>

    return(
        <NavigationContainer theme={theme}>
            <StatusBar style="auto" />
            {
            isLogin ? <BottomTab /> : <StackNoAuth />
            }
        </NavigationContainer>
    )
}