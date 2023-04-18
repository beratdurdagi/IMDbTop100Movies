import {
   ScrollView,
   StyleSheet,
   Text,
   View,
   Image,
   Pressable,
   TextInput
 } from "react-native";
import React, { useEffect,useState } from 'react'
import { FONTS } from "../constants/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import { AntDesign } from '@expo/vector-icons';
import { addToCart, cleanCart, removeFromCart } from "../Redux/CartReducer";
import { useDispatch, useSelector } from "react-redux";


const Cart = ({item,index}) => {
   
   const [change, setChange] = React.useState(false);
   const [favorite,setFavorite]=useState(false)

   const route=useRoute()
   const navigation=useNavigation()


  
  
  const cart = useSelector((state) => state.cart.cart);
  
  const dispatch = useDispatch();
  

  
useEffect(()=>{

  if (change){
    navigation.navigate('Details',{name:item.title,desc:item.description,img:item.image});
    setChange(false)
    

  }
})  
   return (
          
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginTop:10,
          width: "100%",
          marginHorizontal:10,
          backgroundColor:change ? 'gray' : 'white',
         

        }}
      >
        <Pressable
          onPress={() => {
            
            setChange(!change);
          }}
          key={index}
          style={{
            maxWidth: 400,
            maxHeight: 400,
            width: 240,
            height: 270,
            marginTop:20,
   
            
            alignItems:'center',
         
            
            flexDirection:'row'
          }}
        >
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={{
              maxWidth: 400,
              maxHeight: 400,
              width: 200,
              height: 200,
              aspectRatio:3/4,
              justifyContent:'center',
          
            }}
          />
         
      
        
        


          <View style={{marginLeft:10,}}>
            <Text style={{...FONTS.h1,width:170,}}>{item.title}</Text>
            <Text style={{...FONTS.h2,marginVertical:10}}> rating : <Text style={{color:'red'}}>{item.rating}</Text></Text>
            <Text style={{color:'gray',...FONTS.h3,width:300,alignContent:'flex-end'}}>{item.genre[0]}</Text>
          </View>
        </Pressable>
      </View>
    );
}

export default Cart

const styles = StyleSheet.create({})