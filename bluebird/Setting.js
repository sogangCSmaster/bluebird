import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import axios from 'axios';

const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
    state = {
        token: ""
    }
    render() {
        var { token, notifications } = this.state;
        return (
            <View style={styles.container}>
                <Text>설정</Text>
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
    button: {
        marginTop: 10,
        height: 50,
        width: width-30,
        backgroundColor: '#2BA5F7',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buttonText: {
        color: "white",
        fontSize: 17,
        fontWeight: "600"
    }
});
