import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import BottomNavigator from './stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (


   

       <NavigationContainer>
         <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
           <Stack.Screen name="Home" component={BottomNavigator} />
           <Stack.Screen name="Details" component={DetailsScreen} />
         </Stack.Navigator>
       </NavigationContainer>


  )
}

export default Navigator

const styles = StyleSheet.create({})