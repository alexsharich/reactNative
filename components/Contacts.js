import React from "react";
import {StyleSheet,View ,Text,Button}from 'react-native'
import { gStyle } from "../styles/style";

export default function Contacts ({navigation}){

    /* const loadScene = ()=>{
        navigation.goBack()
        } */

    return (
        <View style={gStyle.main}>
           <Text style={gStyle.title}>Contacts page</Text>
           {/* <Button title='go on main page' onPress={loadScene}/> */}
        </View>
    )
}
const style = StyleSheet.create({

})