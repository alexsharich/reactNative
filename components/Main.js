import React from "react";
import {StyleSheet,View,Text}from 'react-native'
import { gStyle } from "../styles/style";

export default function Main(){
    return (
        <View style={gStyle.main}>
           <Text style={gStyle.title}>Main page</Text>
        </View>
    )
}
const style = StyleSheet.create({

})