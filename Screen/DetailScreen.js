import React, {Component} from 'react'
import { View, ImageBackground, StyleSheet, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView,  } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component{
    state = {
        data: []
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        const response = await fetch('https://api.kawalcorona.com/indonesia/provinsi')
        const json = await response.json()
        this.setState({data: json})
    }

    render(){
        return(
            <ImageBackground style={{flex:1}} source={require('./img/Details.png')}>
                
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name='menu' size={45} color='#686565' style={styles.menuIcon}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.titleText1}>COVID CASES IN</Text>
                <Text style={styles.titleText2}>INDONESIAN PROVINCE</Text>

                
                    <FlatList 
                    data = {this.state.data}
                    keyExtractor={(x,i) => i}
                    ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:'#cccccc'}}/>}
                    renderItem = {({item}) => 
                        <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'center',marginTop:5}}>
                            <Text style={styles.titleText1}>{item.attributes.Provinsi}</Text>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', marginVertical:10}}>
                                <View style={styles.box}>
                                    <Text style={styles.confirmedText}>Confirmed</Text>
                                    <Text style={styles.posText}>{item.attributes.Kasus_Posi}</Text>
                                </View>
                                <View style={styles.box}>
                                    <Text style={styles.confirmedText}>Recovered</Text>
                                    <Text style={styles.semText}>{item.attributes.Kasus_Semb}</Text>
                                </View>
                                <View style={styles.box}>
                                    <Text style={styles.confirmedText}>Death</Text>
                                    <Text style={styles.matText}>{item.attributes.Kasus_Meni}</Text>
                                </View>
                            </View>
                        </View>
                    }
                    style={{marginTop:20}}

                    />

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
        fontSize: 28,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#686565'
    },
    titleText2: {
        fontSize: 19,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#686565',
        marginTop: -10
    },
    box: {
        backgroundColor: '#EBEBEB',
        width: 100,
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 5
    },
    confirmedText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 3,
        color: '#686565'
    },
    posText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#DC3841'
    },
    semText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3FE058'
    },
    matText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000'
    },
})