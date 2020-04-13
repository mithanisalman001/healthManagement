import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'

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
                <Text>Hi! {this.state.email}</Text>
                <Text>Hello Mr. {this.state.displayName}</Text>
                <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                <Text style={{color: "#FFF", fontWeight:"500"}}>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    },
    button:{
        marginTop: 32,
        width: 123,
        marginTop:40,
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
})