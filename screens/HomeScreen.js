import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';
import { Item, Input, Label, Button , Content, ListItem, } from 'native-base';
import Constants from 'expo-constants'
  
export default class HomeScreen extends React.Component{
  state= {
    BPM: "",
    Oxygen:"",
    Temperature: "",
    displayName: "",
    errorMessage: ""
  }
  componentDidMount(){
    const {displayName} = firebase.auth().currentUser
    this.setState({ displayName });


    const BPMval = firebase.database().ref("/BPM");
    BPMval.on("value", datasnap=>{
      this.setState({ BPM: datasnap.val()})
    })
  

    const Humidityval = firebase.database().ref("/SPO2");
    Humidityval.on("value", datasnap=>{
    this.setState({ Humidity: datasnap.val()})
  })


    const Temperatureval = firebase.database().ref("/Temp");
    Temperatureval.on("value", datasnap=>{
      this.setState({ Temperature: datasnap.val()})
      console.log(this.state.Temperature)
    })
    }
  renderElement=()=>{
    if (this.state.BPM>=120){
      this.setState({ errorMessage: "It's an emergency"})
    }
  }
  render(){
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"800",fontSize:35,marginTop:32, textTransform:"uppercase"}}>User: {this.state.displayName}</Text>
      <Text style={{fontWeight:"600",fontSize:28,marginTop:32, textTransform:"uppercase"}}>Real time Results</Text>
      <View style={{marginTop:32}}>
        <ListItem>
        {this.state.BPM >= 120 ? this.props.navigation.navigate("Message") && <Text style={{color:"#fa1302",fontWeight:"500",fontSize:20}}>This is emergency situation contact someone now !!</Text> : null}
        </ListItem>
        <ListItem>
          <Text style={{fontWeight:"500",fontSize:25}}>BPM: {this.state.BPM}</Text>
        </ListItem>
        <ListItem>
          <Text style={{fontWeight:"500",fontSize:25}}>Oxygen: {this.state.Humidity}</Text>
        </ListItem>
        <ListItem>
          <Text style={{fontWeight:"500",fontSize:25}}>Temperature: {this.state.Temperature}</Text>
        </ListItem>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Constants.statusBarHeight
    },
    circle:{
      width: 390,
      height: 300,
      position:"absolute",  
      top:250,
      opacity: 0.2
    }, 
    btnContainer: {
      flexDirection: "row",
      padding: 20,
      justifyContent: "space-around"
    },
    mybtn: {
      padding: 10,
      width: 120,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 25
    } 
});