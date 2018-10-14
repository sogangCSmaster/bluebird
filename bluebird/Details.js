import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import axios from 'axios';

const { width, height } = Dimensions.get("window");

export default class Details extends React.Component {
    
    render() {
        var { color, title2, body, link, sent_date } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.subject}>
                    <Text style={styles.subjectText}>{title2}</Text>
                </View>
                <View style={styles.dateView}>
                    <FontAwesome name="send-o" size={20} color={color}/>
                    <Text style={styles.dateText}>{sent_date}</Text>
                </View>
                <ScrollView style={styles.bodyView}>
                    <Text style={styles.bodyText}>{body}</Text>
                </ScrollView>

                {link? (
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this._linktoURL(link)}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Link</Text>
                        </View>
                    </TouchableOpacity>
                ) : (
                    null
                )}
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
    subject: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    subjectText: {
        fontSize: 20,
        fontWeight: "500",
        paddingLeft: 10
    },
    dateView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: width
    },
    dateText: {
        marginLeft: 10,
        marginRight: 10,
        textAlign: "right"
    },
    bodyView: {
        marginTop: 30,
        width: width - 20
    },
    bodyText: {
        fontSize: 17,
        textAlign: "center"
    },
    button: {
        marginBottom: 30,
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
