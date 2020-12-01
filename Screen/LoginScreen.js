import React, {Component} from 'react'
import { View, ImageBackground, StyleSheet, Image, Text, TextInput, TouchableOpacity, Button } from 'react-native'

export default class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            nama: ''
        }
    }

    render(){
        return(
            <ImageBackground style={{flex:1}} source={require('./img/login.png')}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                    <Image source={require('./img/logo.png')} style={styles.logo} />
                </View>

                <View style={{flexDirection:'column', justifyContent:'flex-start', marginTop:50,alignSelf:'center'}}>
                    <View style={{marginTop:10}}>
                        <Text style={styles.emailText}>Email:</Text>
                        <TextInput style={styles.emailInput} onChangeText={(text) => {this.setState({nama:text})}} />
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={styles.emailText}>Password:</Text>
                        <TextInput style={styles.emailInput} secureTextEntry={true}/>
                    </View>
                </View>

                <View style={{marginTop:40, alignItems:'center'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={styles.loginButton}>
                            <Text style={styles.loginText}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    logo: {
        marginTop: 70,
        alignSelf: 'center'
    },
    emailText: {
        fontSize: 16,
        color: '#565656'
    },
    emailInput: {
        backgroundColor: '#EBEBEB',
        width: 260,
        height: 40,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 5,
    },
    loginButton: {
        justifyContent: 'center',
        alignItems:'center',
        width: 100,
        height: 50,
        backgroundColor: '#DC3841',
        borderRadius: 8,
    },
    loginText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        
    }
})