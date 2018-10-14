import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swipeout from 'react-native-swipeout';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';

const { width, height } = Dimensions.get("window");

export default class Widecard extends React.Component {
    state={
        dialogVisible: false,
        title2: ""
    }

    componentDidMount = () => {
        var { title } = this.props;
        this.setState({
            title2: title
        })
    }

    render() {
        var { color, title, body, link, id, sent_date } = this.props;
        var { title2 } = this.state;
        const swipeoutBtns = [
            {
                text: 'Delete',
                backgroundColor: "red",
                onPress: () => {this.props._deleteNotification(id)}
            }
        ]
        return (
            <Swipeout
                right={swipeoutBtns}
                autoClose={true}
                scroll={(scrollEnabled) => this.props._toggleScrollEnabled(scrollEnabled)}
            >
                <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Details({color, title2, body, link, sent_date})}>
                    <View style={styles.card}>
                        <View style={[styles.logoView, {backgroundColor: color}]}></View>
                        <View style={styles.symbolInfoView}>
                            <Text style={styles.Symbol} numberOfLines={1}>{title}</Text>
                            <Text style={styles.companyName} numberOfLines={1}>{sent_date}</Text>
                        </View>
                        <View style={styles.chevronView}>
                            <Entypo name="chevron-thin-right" size={20} color={"#2BA5F7"}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
            
        );
    }

}

const styles = StyleSheet.create({
    card: {
        width: width,
        height: 70,
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: "#bbb",
        borderTopWidth: StyleSheet.hairlineWidth
    },
    logoView: {
        width: 3,
        height: 70
    },
    logoImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: "contain",
    },
    symbolInfoView: {
        flex: 8
    },
    Symbol: {
        fontWeight: "500",
        color: "black",
        fontSize: 16,
        marginLeft: 10
    },
    companyName: {
        color: "grey",
        marginLeft: 10
    },
    chevronView: {
        flex: 1
    }
});