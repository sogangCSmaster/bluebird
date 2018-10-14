import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
    render() {
        
        return (
            <View style={styles.container}>

                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>How to use this App</Text>
                        <Ionicons name="ios-arrow-forward" color={"grey"} size={20} style={{position: "absolute", right: 10}}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>Open Source License</Text>
                        <Ionicons name="ios-arrow-forward" color={"grey"} size={20} style={{position: "absolute", right: 10}}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>Terms of use</Text>
                        <Ionicons name="ios-arrow-forward" color={"grey"} size={20} style={{position: "absolute", right: 10}}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.wideButton}>
                        <Text style={styles.buttonText}>Privacy policy</Text>
                        <Ionicons name="ios-arrow-forward" color={"grey"} size={20} style={{position: "absolute", right: 10}}/>
                    </View>
                </TouchableOpacity>

                <View style={{position: "absolute", bottom: 30}}>
                    <Text style={{color: "#43A3FA"}}>Blue Bird v1.0.0</Text>
                </View>
                
            </View>
        );
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
