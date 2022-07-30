import React from "react";
import {StyleSheet,Text, TouchableOpacity} from 'react-native'

export default function ListItem ({el,removeTask}){

    const deleteTask =(key)=>{
        removeTask(key)
    }

    return (
        <TouchableOpacity onPress={()=>deleteTask(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        padding:20,
        backgroundColor:'gray',
        borderRadius:5,
        borderWidth:1,
        marginTop:20,
        width:'60%',
        marginLeft:'20%'
    }
    
})
