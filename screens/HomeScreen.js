import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Item, Input, Label, Button , Content, ListItem, List} from 'native-base';
import Constants from 'expo-constants'
  
export default class HomeScreen extends React.Component{
  state= {
    text :"",
    mylist: []
  }
  componentDidMount(){
    const myitems = firebase.database().ref("mywishes");
    myitems.on("value", datasnap=>{
      //console.log(Object.values(datasnap.val()))
      this.setState({mylist: Object.values(datasnap.val()) })
    })
  }
  saveitem(){
    //console.log(this.state.text)
    const mywishes = firebase.database().ref("mywishes");
    mywishes.push().set({
      text:this.state.text,
      time:Date.now()
    })
    this.setState({text: ""})
  }
  render(){
    console.log(this.state)
    const myitems = this.state.mylist.map(item =>{
      return(
        <ListItem style={{justifyContent:"space-between"}} key={item.time}>
          <Text>{item.text}</Text>
          <Text>{new Date(item.time).toDateString()}</Text>
        </ListItem>
      )
    })
  return (
    <View style={styles.container}>
      <Item floatingLabel>
        <Label>add Items</Label>
          <Input 
          value= {this.state.text}
          onChangeText = {(text)=>this.setState({text})}
          />
      </Item>
      <View style={styles.btnContainer}>
        <Button rounded 
        onPress={()=> this.saveitem()}
        style={styles.mybtn}>
          <Text style={styles.text}>Add</Text>
        </Button>
        <Button rounded danger style={styles.mybtn}>
          <Text style={styles.text}>Delete All</Text>
        </Button>
      </View>
      <List>
        {myitems}
      </List>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Constants.statusBarHeight
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