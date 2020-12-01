import React, { Component } from 'react';
import { Text, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './LoginScreen'
import Home from './HomeScreen'
import Details from './DetailScreen'
import About from './AboutScreen'

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeDrawer = createDrawerNavigator();

const HomeDrawerScreen = () => (
    <HomeDrawer.Navigator>
       <HomeDrawer.Screen name="Home" component={Home} /> 
       <HomeDrawer.Screen name="Details" component={Details} />
       <HomeDrawer.Screen name="About Us" component={About} /> 
    </HomeDrawer.Navigator>
)


function App(){
    return(
        <NavigationContainer>
            <LoginStack.Navigator headerMode='none' >
                <LoginStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <LoginStack.Screen name="Home" component={HomeDrawerScreen} options={{}}/>
            </LoginStack.Navigator>
        </NavigationContainer>
    )
}

export default App