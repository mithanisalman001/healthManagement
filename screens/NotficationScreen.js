import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Constants from 'expo-constants'
const width_propotion = "100%"
export default class NotficationScreen extends React.Component{
    render(){
        return(
      <View styles={styles.container}>            
      <Image 
      style={styles.circle}
      source={require("../assets/ecg.png")} />
      <View style={{alignItems:"center",justifyContent:"center",marginTop:50}}>
        <Text style={{fontSize:18}}>No Notfications to display at the moment</Text>
        </View>
      </View>
      
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
        justifyContent:"center",
        alignItems:"center"
        },
    circle:{
      width: 390,
      height: 300,  
      top:250,
      opacity: 0.2,
      position:"absolute"
    }
})