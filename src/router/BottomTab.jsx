import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1Auth from '../screens/Screen1Auth';
import Screen2Auth from '../screens/Screen2Auth';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='1' component={Screen1Auth} />
            <Tab.Screen name='2' component={Screen2Auth} />
        </Tab.Navigator>
    )
}

export default BottomTab