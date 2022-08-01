import React from "react";
import {StyleSheet,View ,Text,Button}from 'react-native'
import { gStyle } from "../styles/style";

export default function FullInfo ({route}){

    /* const loadScene = ()=>{
        navigation.goBack()
        } */

    return (
        <View style={gStyle.main}>
           <Text style={gStyle.title}>{route.params.name}</Text>
           <Text style={gStyle.title}>{route.params.full}</Text>
           {/* <Button title='go on main page' onPress={loadScene}/> */}
        </View>
    )
}
const style = StyleSheet.create({

})