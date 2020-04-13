import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import NotficationScreen from './screens/NotficationScreen'
import MessageScreen from './screens/MessageScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAaK8zmxQ878buDnckppfO_nKCp_eYH9q0",
  authDomain: "healthmanagement-141f2.firebaseapp.com",
  databaseURL: "https://healthmanagement-141f2.firebaseio.com",
  projectId: "healthmanagement-141f2",
  storageBucket: "healthmanagement-141f2.appspot.com",
  messagingSenderId: "98145261602",
  appId: "1:98145261602:web:de43e553ad9b3c7f03527b",
  measurementId: "G-V7DLFKWJ2Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={32} color={tintColor}/>
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={32} color={tintColor}/>
      }
    },
    Notification: {
      screen: NotficationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={32} color={tintColor}/>
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={32} color={tintColor}/>
      }
    }

  },
  {
    tabBarOptions:{
      activeTintColor: "#E9446A",
      inactiveTintColor: "#B8BBC4"
    }
  }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)