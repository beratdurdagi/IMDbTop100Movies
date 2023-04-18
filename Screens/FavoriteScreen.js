import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,

  TextInput,
  Dimensions
} from "react-native";
import React, { useState, useEffect, memo } from "react";
import { FONTS } from "../constants/theme";
import Movies from "../Components/Movies";
import { FlashList } from "@shopify/flash-list";
import DetailsScreen from "./DetailsScreen";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Components/Cart";

const FavoriteScreen = () => {
  const [list, setList] = React.useState([]);
  const cart = useSelector((state) => state.cart.cart);
  

    

 

  function renderHeader(){
    return(
      <View style={{marginTop:50,marginHorizontal:10}}>
        <Text style={{...FONTS.largeTitle}}>Favorites({cart.length})</Text>
        <TextInput
                   
                    placeholder="Search for movies..."
                    style={{borderWidth:1,borderColor:'rgba(0,0,0,0.4)',width:'100%',padding:5,borderRadius:8,height:48,paddingHorizontal:5,marginTop:10}}
                    
                    
                />
        </View>
    )
  
  }

  function renderList(){
    return(
      <View style={{flex:1}}>
      <FlashList
      data={cart}
      keyExtractor={(item)=>item.id===`${item._id}`}
      renderItem={({ item,index }) =><Cart item={item} index={index}/> }
      estimatedItemSize={400}
      
      ItemSeparatorComponent={(props) => {
        
        return (<View style={{height: 5, backgroundColor: props.highlighted ? 'green' : 'gray'}} />);
      }}    />
     </View>
    )
  }
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      
      {renderHeader()}
     {cart.length >0 ?  renderList() : <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={{...FONTS.largeTitle}}>
      Cart is empty </Text>
     </View>}
    </ScrollView>
  );
};

export default memo(FavoriteScreen);

const styles = StyleSheet.create({


});
