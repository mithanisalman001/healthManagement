import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, LayoutAnimation } from 'react-native'
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component{
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = ()=> {
        const { email, password } = this.state

        firebase.auth().signInWithEmailAndPassword( email, password)
        .catch( error => this.setState({ errorMessage: error.message }))
        }
    render(){
        LayoutAnimation.easeInEaseOut();
        return(
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"></StatusBar>
                <Text style={styles.greeting}>
                    { `Sign In your account`}
                </Text>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                
                <View style={styles.form}>
                    <View>
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
                        placeholder="Enter your password"
                        placeholderTextColor="#383ed1"
                        ></TextInput> 
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: "#FFF", fontWeight:"500"}}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{alignSelf: "center", marginTop: 32}}
                onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{ color:"#414959", fontSize: 13 }}>
                        New to Health Analyzing System? <Text style={{ fontWeight: "500", color: "#383ed1" }}>Sign Up</Text>
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
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#383ed1"
    },
    button:{
        marginHorizontal: 30,
        backgroundColor: "#383ed1",
        borderRadius: 14,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
})