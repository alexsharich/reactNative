import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button ,SafeAreaView, Alert, Image, TouchableWithoutFeedback, View} from 'react-native';

export default function App() {

const handleTextPress = ()=>{
  console.log('hello')
}
const handleButtonPress =()=>{
  Alert.alert('Header','Main message',[
    {text:'YES',onPress:()=>{console.log('Yes button')}},
    {text:'NO',onPress:()=>{console.log('No button')}}
  ])
}
const handleButtonPress2 =()=>{
  Alert.prompt('Header','Main message',text=>console.log(text))
}

  return (
    <View style={styles.mainBlock}>
    {/* <SafeAreaView style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text} onPress={handleTextPress}>Alexander React Native !</Text>
      </View>
    
        <Button title='Click me alert' onPress={handleButtonPress} color={'red'}/>
        <Button title='Click me prompt' onPress={handleButtonPress2} color={'green'}/>
       <TouchableWithoutFeedback onPress={handleButtonPress}>
       <Image blurRadius={2} style={styles.imageStyle} 
        source={require('./assets/rn.png')}
        /> */}
        
        {/* <Image 
        style={styles.logo}
        source={{
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKEh8HSajwhLGR7Tm8DZrt_-iJCf0gF9RSg&usqp=CAU",
        }}
        /> */}
       {/* </TouchableWithoutFeedback>
        
      <StatusBar style="auto" />
      <Text style={[someStyle,styles.secondStyle]}>new view</Text>
    </SafeAreaView> */}
    <View style={[styles.box,{backgroundColor:'yellow'}]}></View>
    <View style={[styles.box,{backgroundColor:'red'}]}></View>
    <View style={[styles.box,{backgroundColor:'green'}]}></View>
    </View>
  );
}

/* const someStyle = {
  backgroundColor:'red',
  color:'white'
} */

const styles = StyleSheet.create({
  mainBlock:{
    flex:1,
    
  },
  box:{
    width:100,
    height:100,
  }
 /*  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'red',
  },
  imageStyle:{
    width:50,
    height:50,
  },
  logo:{
    width:50,
    height:50,
  },
  secondStyle:{
    borderColor:'black',
    borderBottomWidth:3
  },
  box:{
    backgroundColor: 'yellow',
    width:'50%',
    height:150,
    opacity: .9,
    borderWidth: 2,
    borderColor: 'green',
    position: 'absolute',
    top: 100,
    left: 50
  } */
});
