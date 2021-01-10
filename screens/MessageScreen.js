import React from 'react'
import { View, TouchableOpacity, Text, TextInput ,StyleSheet, StatusBar, Image } from 'react-native'
import * as SMS from 'expo-sms'

export default class MessageScreen extends React.Component{
    sendMessage = async () => {
        const { result } = await SMS.sendSMSAsync(
            this.state.number,'I am in trouble please get to me ASAP'
        )
    }
    state = {
        number : ''
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.warningMessage}>If you are seeing this screen automatically then there maybe a emergency. Conatct Emergency Contact</Text> 
                <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.form}>
                    <View style={{marginTop:32}}>
                        <Text style={styles.inputTitle}>Phone Number</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        keyboardType= {"phone-pad"}
                        placeholder="Phone number"
                        onChangeText={number => this.setState({ number })}
                        value = {this.state.number}
                        ></TextInput> 
                    </View>

                </View>

                <TouchableOpacity
                style={styles.button}
                onPress={this.sendMessage}
                >
                <Text style={{color: "#FFF", fontWeight:"500"}}>Send Message</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
      alignItems:"center",
      justifyContent:"center"
    },
    circle:{
        width: 390,
        height: 300,
        position:"absolute",  
        top:250,
        opacity: 0.2
      },
    warningMessage: {
        color: "#fa1302",
        marginLeft:30,
        fontSize: 15,
        textTransform: "uppercase",
        fontWeight:"400"
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
    form: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    inputTitle:{
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        width:150,
        fontSize: 15,
        color: "#161F30"
    }
})