import React,{useState} from "react";
import {StyleSheet,View,Text,TouchableOpacity,FlatList/* Button */}from 'react-native'
import { gStyle } from "../styles/style";

export default function Main({navigation}){

const loadScene = ()=>{
navigation.navigate('Contacts')
}

const [news,setNews]=useState([
    {name:'Google',anons:'GOOOOOOGLE',full:'Google is cool',key:'1'},
    {name:'Facebook',anons:'Facebook ???',full:'Facebook is cool',key:'2'},
    {name:'Apple',anons:'Apple !!!',full:'Apple is cool',key:'3'},
])

    return (
        <View style={gStyle.main}>
           <Text style={gStyle.title}>Main page</Text>
           <FlatList data={news} renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('FullInfo',item)}>
            <Text>{item.name}</Text>
            </TouchableOpacity>
           )}/>
        </View>
    )
}
const style = StyleSheet.create({

})