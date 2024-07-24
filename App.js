
import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import Signup from './Signup';
import Welcome from './app/screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import { getAuth, onAuthStateChanged } from 'firebase/auth';
//import firebase from './app/firebaseConfig';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // Hide the header for the login screen
        />
        <Stack.Screen 
          name="WelcomeScreen" 
          component={Welcome} 
          options={{ headerShown: false }} // Customize the header for the home screen
        />
         <Stack.Screen 
          name="SignUp" 
          component={Signup} 
          options={{ headerShown: false }} // Hide the header for the login screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
