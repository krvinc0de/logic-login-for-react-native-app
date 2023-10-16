import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import StackNoAuth from './src/router/StackNoAuth';
import { useEffect, useState } from 'react';
import BottomTab from './src/router/BottomTab';

export default function App() {

  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const theme = useColorScheme()
  
  useEffect(() => {
    setTimeout(() => {
        setIsLogin(true);
        setLoading(false);
    }, 5000);
  }, [])
  
  if (loading) return <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Loading...</Text>
      </View>

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar style="auto" />
        {
          isLogin ? <BottomTab /> : <StackNoAuth />
        }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
