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

const HomeScreen = () => {
  const [list, setList] = React.useState([]);
 

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "561716b6ecmsh6338961f47a9a49p1500dcjsnf47e7af79a11",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const fetchData = () => {
    fetch("https://imdb-top-100-movies.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((result) => {
        setList(result);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function renderHeader(){
    return(
      <View style={{marginTop:50,marginHorizontal:10}}>
        <Text style={{...FONTS.largeTitle}}>Movies</Text>
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
      data={list}
      renderItem={({ item,index }) =><Movies item={item} index={index}/> }
      estimatedItemSize={200}
      ItemSeparatorComponent={(props) => {
        
        return (<View style={{height: 5, backgroundColor: props.highlighted ? 'green' : 'gray'}} />);
      }}    />
      </View>
    )
  }
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      
      {renderHeader()}
      {renderList()}
    </ScrollView>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({

  textStyle:{
 ...FONTS.h1
    
  }
});
