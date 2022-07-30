import React, {useState} from "react";
import {StyleSheet,TextInput,Text, Button,View} from 'react-native'

export default function Form ({addHandler}){

const [text,setNewText] = useState('')

const onChange=(text)=>{
    setNewText(text)
}
const addTask = ()=>{
    if(text.trim() ===''){
        return
    }else{
        addHandler(text)
        setNewText((text)=>{
            return ''
        })
    }
}

    return (
     <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder={'task'} value={text}/>
        <Button title={'Add Task'} color='green' onPress={addTask}/>
     </View>
    )
}
const styles = StyleSheet.create({
    input:{
        borderColor:'red',
        padding:10,
        borderBottomWidth:1,
        marginVertical:30,
        marginHorizontal:'20%',
        width:'60%'
    }
    
})
