import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons,Fontisto  } from '@expo/vector-icons';
import FavoriteScreen from '../Screens/FavoriteScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../Screens/DetailsScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator=()=> { 
  return (
 
    <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{height:60}}}>
      <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="movie" size={35} color={focused ? 'red': 'gray'} />
          ),
        }}/>
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto name="favorite" size={35} color={focused ? 'red': 'gray'} />
          ),
        }} />


    </Tab.Navigator>
   );
}
export default BottomNavigator;