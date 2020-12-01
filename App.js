import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'

import SplashScreen from './Screen/SplashScreen'
import LoginScreen from './Screen/LoginScreen'
import HomeScreen from './Screen/HomeScreen'
import DetailScreen from './Screen/DetailScreen'
import AboutScreen from './Screen/AboutScreen'
import Nav from './Screen/index'

import * as Font from 'expo-font'

const getFonts = () => {
    return Font.loadAsync({
      'coolvetica': require('./assets/fonts/coolvetica.ttf')
  })
}


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded){
    return (
    <Nav/>
    );
  }
  else {
    return(
      <AppLoading 
    startAsync={getFonts}
    onFinish={() => setFontsLoaded(true)}
    />
    )
    
  }
  
}

