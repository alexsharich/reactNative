import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import ListItem from './components/ListItem';
import Header from './components/Header';
import Form from './components/Form';

export default function App() {

  const [listOfItems,setListOfIteams] = useState([
    {text:'kupit moloko',key:'1'},
    {text:'kupit varezki',key:'2'},
    {text:'kupit knigu',key:'3'},
    {text:'kupit snegovika',key:'4'},
    {text:'kupit tvorozok',key:'5'}
  ])

  const addHandler = (text)=>{
    setListOfIteams((listOfItems)=>{
      return [
        {text:text,key: Math.random().toString(36).substring(7)},
        ...listOfItems
      ]
    })
  }
  const removeTask = (key)=>{
    setListOfIteams((listOfItems)=>{
      return listOfItems.filter(el=>el.key !== key)
    })
  }

  return (
    <View style={styles.mainBlock}>
       <Header/>
       <Form addHandler={addHandler}/>
       <FlatList data={listOfItems} renderItem={({item})=>{
        return (
          <ListItem el={item} removeTask={removeTask}/>
        )
       }}/>
    </View>
  );
}


const styles = StyleSheet.create({
  mainBlock:{
 
  },
});
