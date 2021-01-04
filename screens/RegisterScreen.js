import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons'

export default class RegisterScreen extends React.Component{
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }

    handleSignUp= ()=> {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                })
            })
            .catch(error => this.setState({errorMessage: error.message}))
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Text style={styles.greeting}>
                    { `Sign Up to get started.`}
                </Text>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                
                <View style={styles.form}>
                     <View>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={name => this.setState({ name })}
                        value = {this.state.name}
                        placeholder= "Name"
                        placeholderTextColor="#383ed1"
                        ></TextInput> 
                    </View>


                    <View style={{ marginTop: 32}}>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value = {this.state.email}
                        placeholder= "Enter your Email Address"
                        placeholderTextColor="#383ed1"
                        ></TextInput> 
                    </View>

                    <View style={{marginTop: 32}}>
                        <TextInput 
                        style={styles.input} 
                        secureTextEntry  
                        autoCapitalize="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        placeholder= "Enter your password"
                        placeholderTextColor="#383ed1"
                        ></TextInput> 
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: "#FFF", fontWeight:"500"}}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{alignSelf: "center", marginTop: 32}}
                onPress={() => this.props.navigation.navigate("Login")}
                >
                    <Text style={{ color:"#414959", fontSize: 13 }}>
                        Already a User? <Text style={{ fontWeight: "500", color: "#383ed1" }}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop:  32,
        fontSize: 28,
        fontWeight: "800",
        textAlign: "center",
        color: "#383ed1"
    },
    errorMessage:{
        height:72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error:{
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
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
        fontSize: 15,
        color: "#161F30"
    },
    button:{
        marginHorizontal: 30,
        backgroundColor: "#383ed1",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
})