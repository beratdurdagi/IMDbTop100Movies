import {
  Image,
  Pressable,
  RootTagContext,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FONTS } from "../constants/theme";
import { AntDesign } from '@expo/vector-icons';

const DetailsScreen = () => {

  const route = useRoute();
  
  const navigation=useNavigation()
  

  return (
    <SafeAreaView>
      <View
        style={{ height: 400}}
      >
        
        <Image
          source={{ uri: route.params.img }}
          style={{ height:'100%',width:'100%' }} resizeMode="stretch"
 
     
        />
        <AntDesign name="arrowleft" size={30} color="gray" style={{position:'absolute',left:15,top:40}} onPress={()=>navigation.goBack()} />
        

      </View>
      <View style={{ marginTop: 50, marginHorizontal: 10 }}>
        <Text style={{ ...FONTS.body1, marginBottom: 15 }}>Movie Details</Text>
        <Text style={{ ...FONTS.h2 }}>{route.params.desc}</Text>

        <View style={{ marginVertical: 10, justifyContent: "center" }}>
          <Text
            style={{
              width: "100%",
              height: 3,
              color: "black",
              borderBottomWidth: 1,
            }}
          />

          <Text style={{ ...FONTS.body1, marginVertical: 15 }}>
            Visit Reddit
          </Text>
          <Text
            style={{
              width: "100%",
              height: 3,
              color: "black",
              borderBottomWidth: 1,
            }}
          />

          <Text style={{ ...FONTS.body1, marginVertical: 15 }}>
            Visit Website
          </Text>
          <Text
            style={{
              width: "100%",
              height: 3,
              color: "black",
              borderBottomWidth: 1,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
