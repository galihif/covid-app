import React, {Component} from 'react'
import { View, ImageBackground, StyleSheet, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView,  } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';

export default class App extends Component{
    render(){
        return(
            <ImageBackground source={require('./img/about.png')} style={{flex:1}} >

                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name='menu' size={45} color='#686565' style={styles.menuIcon}/>
                    </TouchableOpacity>
                </View>

                <Image source={require('./img/profil.png')} style={styles.profil} />

                <View style={{flexDirection:'column',alignItems:'center', marginTop:15}}>
                    <Text style={styles.nameText}>Galih Indra Firmansyah</Text>
                    <Text style={styles.jobText}>Software Developer</Text>
                </View>

                <Text style={styles.contactText}>Contact Me</Text>
                <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center', marginTop:20}}>
                    <TouchableOpacity>
                        <Icons name='logo-instagram' size={70} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icons name='logo-facebook' size={70} style={styles.fb}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icons name='logo-linkedin' size={70} />
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    menuIcon:{
        marginTop: 30,
        marginLeft: 20
    },
    profil: {
        marginTop: 25,
        alignSelf: 'center',
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    jobText: {
        fontSize: 18,
        color: '#777777',
        fontWeight: 'bold'
    },
    contactText: {
        alignSelf: 'center',
        fontSize: 26,
        marginTop: 40,
        fontWeight: 'bold'
    },
    fb: {
        marginHorizontal: 40
    }
})