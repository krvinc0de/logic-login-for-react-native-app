import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNoAuth from './src/router/StackNoAuth';
import { useEffect, useState } from 'react';
import BottomTab from './src/router/BottomTab';

export default function App() {

  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setIsLogin(true);
    }, 2000);
  }, [])
  
  if (loading) return <View style={{flex: 1}}><Text>Loading...</Text></View>

  return (
    <NavigationContainer>
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
