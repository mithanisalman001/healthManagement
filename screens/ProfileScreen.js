import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import * as firebase from 'firebase'
import Constants from 'expo-constants'
export default class HomeScreen extends React.Component{
    state = {
        email: "",
        displayName: "",
    }

    componentDidMount(){
        const { email, displayName} = firebase.auth().currentUser

        this.setState({ email, displayName})
    }

    signOutUser = () => {
        firebase.auth().signOut()
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{alignItems:"center",justifyContent:"center"}}>
                <Text style={styles.inputTitle}>Hi! {this.state.email}</Text>
                <Text style={styles.inputTitle}>Hello Mr. {this.state.displayName}</Text>
                <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                <Text style={{color: "#FFF", fontWeight:"500"}}>Log Out</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    circle:{
      width: 390,
      height: 300,
      position:"absolute",  
      top:250,
      opacity: 0.2
    },
    button:{
        marginTop: 32,
        width: 123,
        marginTop:40,
        marginHorizontal: 30,
        backgroundColor: "#383ed1",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize: 20,
        fontWeight:"500",
        textTransform: "uppercase"
    },
})