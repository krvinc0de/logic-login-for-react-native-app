import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNoAuth from '../screens/ScreenNoAuth';

const Stack = createNativeStackNavigator()

const StackNoAuth = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='noauth' component={ScreenNoAuth} />
        </Stack.Navigator>        
    )
}

export default StackNoAuth