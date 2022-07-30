import React from "react";
import { StyleSheet,View,Text } from "react-native";

export default function Header (){
    return (
        <View style={styles.main}>
<          Text style={styles.text}>TODOLIST</Text>
        </View>
    )
}

const styles = StyleSheet.create({
main:{
paddingTop:50,
height:100,
backgroundColor:'silver',
alignItems:'center'
},
text:{
    alignItems:'center',
    fontSize:18,
    color:'red',
    fontWeight:'bold'
}
})