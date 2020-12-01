import React, {Component} from 'react'
import { View, ImageBackground, StyleSheet, Image, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component{
    state = {
        data: []
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch('https://api.kawalcorona.com/indonesia')
        const json = await response.json();
        this.setState({data: json})
        
    }
    

    render(){
        return(
            <ImageBackground style={{flex:1}} source={require('./img/Home.png')}>
                
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name='menu' size={45} color='#686565' style={styles.menuIcon}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.titleText1}>COVID CASES IN</Text>
                <Text style={styles.titleText2}>INDONESIA</Text>

                <View style={{flexDirection:'column', justifyContent:'flex-start', alignItems:'center', marginTop:20}}>
                    <View style={styles.box}>
                        <Text style={styles.confirmedText}>Confirmed</Text>
                        <FlatList 
                            data={this.state.data}
                            keyExtractor={(x,i) =>i}
                            renderItem = {({item}) =>
                            <Text style={styles.posText}>{item.positif}</Text>
                        }
                        />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.confirmedText}>Recovered</Text>
                        <FlatList 
                            data={this.state.data}
                            keyExtractor={(x,i) =>i}
                            renderItem = {({item}) =>
                            <Text style={styles.semText}>{item.sembuh}</Text>
                        }
                        />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.confirmedText}>Death</Text>
                        <FlatList 
                            data={this.state.data}
                            keyExtractor={(x,i) =>i}
                            renderItem = {({item}) =>
                            <Text style={styles.matText}>{item.meninggal}</Text>
                        }
                        />
                    </View>
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
    titleText1: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#686565',
    },
    titleText2: {
        fontSize: 35,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#686565',
        marginTop: -10
    },
    box: {
        backgroundColor: '#EBEBEB',
        width: 200,
        height: 140,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20
    },
    confirmedText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 18,
        color: '#686565'
    },
    posText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#DC3841'
    },
    semText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#3FE058'
    },
    matText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#000000'
    },
})