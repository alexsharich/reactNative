import React,{useState} from "react";
import {StyleSheet,View,Text,TouchableOpacity,FlatList,Image}from 'react-native'
import { gStyle } from "../styles/style";

export default function Main({navigation}){

const loadScene = ()=>{
navigation.navigate('Contacts')
}

const [news,setNews]=useState([
    {name:'Google',anons:'GOOOOOOGLE',full:'Google is cool',key:'1',img:'https://ru.pinterest.com/pin/813392382709272526/'},
    {name:'Facebook',anons:'Facebook ???',full:'Facebook is cool',key:'2',img:'https://ru.wallpaper.mob.org/gallery/tag=oshki_oty_otiki/'},
    {name:'Apple',anons:'Apple !!!',full:'Apple is cool',key:'3',img:'https://www.pinterest.com/pin/376261743866615679/'},
])

    return (
        <View style={gStyle.main}>
           <Text style={gStyle.title}>Main page</Text>
           <FlatList data={news} renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('FullInfo',item)}>
                <Image source={{width:'100%',height:200,uri:item.img}}/>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
            </TouchableOpacity>
           )}/>
        </View>
    )
}
const styles = StyleSheet.create({
item:{
    width:'100%',
marginBottom:30,},
header:{
    marginBottom:30
},
title:{
    fontFamily:'mt-bold',
    fontSize:22,
    textAlign:'center',
    marginTop:20,
    color:'#474747'
},
anons:{
    fontFamily:'mt-light',
    fontSize:16,
    textAlign:'center',
    marginTop:5,
    color:'#474747'
}
})