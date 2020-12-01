import React, {Component} from 'react'
import { View, ImageBackground } from 'react-native'

export const App = () => {
    
    return(
        <ImageBackground style={{flex:1}} source={require('./img/splash.png')}/>

    )
}

export default App