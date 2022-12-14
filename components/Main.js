import React,{useState} from "react";
import {StyleSheet,View,Text,TouchableOpacity,FlatList,Image,Modal}from 'react-native'
import { gStyle } from "../styles/style";
import { Ionicons } from '@expo/vector-icons';


export default function Main({navigation}){

const loadScene = ()=>{
navigation.navigate('Contacts')
}

const [news,setNews]=useState([
    {name:'Google',anons:'GOOOOOOGLE',full:'Google is cool',key:'1',img:'https://ru.pinterest.com/pin/813392382709272526/'},
    {name:'Facebook',anons:'Facebook ???',full:'Facebook is cool',key:'2',img:'https://ru.wallpaper.mob.org/gallery/tag=oshki_oty_otiki/'},
    {name:'Apple',anons:'Apple !!!',full:'Apple is cool',key:'3',img:'https://www.pinterest.com/pin/376261743866615679/'},
])

const [modalWindow,setModalWindow] = React.useState(false)

    return (
        <View style={gStyle.main}>
            <Modal visible={modalWindow}>
        
            <View style={gStyle.main}>
            <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={()=>setModalWindow(false)} />
                <Text style={styles.title}>FORM FOR ARTCLES</Text>
            </View>
            </Modal>
            <Ionicons name="add-circle" size={34} color="blue" style={styles.iconAdd} onPress={()=>setModalWindow(true)}/>
           <Text style={gStyle.title}>Main page</Text>
           <FlatList data={news} renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('FullInfo',item)}>
                <Image style={styles.image} source={{uri:item.img}}/>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
            </TouchableOpacity>
           )}/>
        </View>
    )
}
const styles = StyleSheet.create({
    iconClose:{
      textAlign:'center'  
    },
    iconAdd:{
        textAlign:'center',
        marginBottom:15
    },
item:{
    width:'100%',
marginBottom:30,},
image:{
width:'100%',
height:200
},
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