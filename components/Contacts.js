import React from "react";
import {StyleSheet,View ,Text,Image}from 'react-native'
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";
import { gStyle } from "../styles/style";

export default function Contacts ({navigation}){

    /* const loadScene = ()=>{
        navigation.goBack()
        } */

    return (
        <View style={gStyle.main}>
            <Image source={{
                width:'100%',
                height:200,
                uri:route.params.img
            }}/>
           <Text style={gStyle.title}>Contacts page</Text>
           {/* <Button title='go on main page' onPress={loadScene}/> */}
        </View>
    )
}
const style = StyleSheet.create({

})