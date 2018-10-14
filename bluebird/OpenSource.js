import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get("window");

export default class OpenSource extends React.Component {
    render() {
        
        return (
            <View style={styles.container}>

                <TouchableOpacity activeOpacity={0.7} onPress={() => Actions.License({url: 'https://raw.githubusercontent.com/sogangCSmaster/bluebird/master/LICENSE'})}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>Blue Bird</Text>
                        <Ionicons name="ios-arrow-forward" color={"grey"} size={20} style={{position: "absolute", right: 10}}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={() => Actions.License({url: 'https://raw.githubusercontent.com/facebook/react-native/master/LICENSE'})}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>React Native</Text>
                        <Ionicons name="ios-arrow-forward" color={"grey"} size={20} style={{position: "absolute", right: 10}}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={() => Actions.License({url: 'https://raw.githubusercontent.com/expo/expo/master/LICENSE'})}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>Expo</Text>
                        <Ionicons name="ios-arrow-forward" color={"grey"} size={20} style={{position: "absolute", right: 10}}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={() => Actions.License({url: 'https://raw.githubusercontent.com/RNRF/react-native-router-flux/master/LICENSE'})}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>React Native Router Flux</Text>
                        <Ionicons name="ios-arrow-forward" color={"grey"} size={20} style={{position: "absolute", right: 10}}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={() => Actions.License({url: 'https://raw.githubusercontent.com/dancormier/react-native-swipeout/master/LICENSE'})}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>React Native Swipeout</Text>
                        <Ionicons name="ios-arrow-forward" color={"grey"} size={20} style={{position: "absolute", right: 10}}/>
                    </View>
                </TouchableOpacity>
                
                <Image source={require('./assets/icon.png')} style={{resizeMode: "contain", width: 100, height: 100, marginTop: 50}}/>
                <View style={{marginTop: 10, width: width - 30, justifyContent: "center", alignItems: "center"}}>
                    <Text>App Icon is made by Freepik from</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this._linktoURL('https://www.flaticon.com')}>
                        <Text style={{color: "blue"}}>www.flaticon.com</Text>
                    </TouchableOpacity>
                    <Text>is licensed by</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => Actions.License({url: 'https://creativecommons.org/licenses/by/3.0/'})}>
                        <Text style={{color: "blue"}}>CC 3.0 BY</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
    _linktoURL = (link) => {
        Linking.openURL(link);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    wideButton: {
        width: width,
        height: 48,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    buttonText: {
        color: "black",
        fontWeight: "500",
        textAlign: "left",
        marginLeft: 20,
        fontSize: 17
    }
});
