import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, AsyncStorage, Share } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import axios from 'axios';
import { Push } from './Push';
import Widecard from './Widecard';

const instance = axios.create({ baseURL: "http://bluebird.sysmetic.co.kr" })
const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
    state = {
        token: "",
        notifications: [],
        scrollEnabled: true,
    }
    componentDidMount = () => {
        this._getToken();
        this._getNotifications();
    }
    render() {
        var { token, notifications } = this.state;
        return (
            <View style={styles.container}>
                {token==""? (
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this._createToken()}>
                        <View style={[styles.button, {flexDirection: "row"}]}>
                            <Text style={styles.buttonText}>  Create Token  </Text>
                            <FontAwesome name="send-o" size={20} color="white"/>
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity activeOpacity={0.7} onPress={this._shareToken}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Share my token to developer</Text>
                            <Text style={{color: "white"}}>{token}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                <ScrollView style={{marginTop: 10}} scrollEnabled={this.state.scrollEnabled}>
                    { 
                        Object.values(notifications).map(notifications =>
                            <Widecard
                                key={notifications.id}
                                id={notifications.id}
                                title={notifications.title}
                                body={notifications.body}
                                color={notifications.color}
                                link={notifications.link}
                                sent_date={notifications.sent_date}
                                _toggleScrollEnabled={this._toggleScrollEnabled}
                                _deleteNotification={this._deleteNotification}
                            />
                    ) }
                </ScrollView>
            </View>
        );
    }

    _createToken = () => {
        Push();
        this._getToken();
    }

    _getToken = async() => {
        var token = await AsyncStorage.getItem("TOKEN");

        if(token){
            this.setState({
                token: token
            })
        }
    }

    _shareToken = () => {
        var { token } = this.state;
        
        var message = "Bluebird Token Share\n\n";
        message = message + token;
        message = message + "\n\nUse this token for push notifications.\n\n"
        message = message + "Document : http://bluebird.sysmetic.co.kr/document";

        Share.share({
            message: message
        })
    }

    _getNotifications = async() => {
        var token = await AsyncStorage.getItem("TOKEN");

        if(!token){
            return;
        }

        var response = await instance.get("/received", {
            params: {
                token: token
            }
        })

        var notifications = response.data;
        this.setState({
            notifications: notifications
        })
    }

    _toggleScrollEnabled = (scrollEnabled) => {
        this.setState({
            scrollEnabled: scrollEnabled
        })
    }

    _deleteNotification = async(id) => {
        var token = await AsyncStorage.getItem("TOKEN");
        await instance.get("/remove", {
            params: {
                token: token,
                id: id
            }
        })

        this._getNotifications();

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
