import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Linking, ScrollView } from 'react-native';


const { width, height } = Dimensions.get("window");

export default class Documentation extends React.Component {
    state={
        example: `curl -H "Content-Type: application/json" -X POST
    "http://bluebird.sysmetic.co.kr/send" -d '{
      "tokens": [
        "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",
        "ExponentPushToken[yyyyyyyyyyyyyyyyyyyyyy]"
      ],
      "title": "title of push notification",
      "body": "content of push notification",
      "link": "http://www.sysmetic.co.kr",
      "color": "#377B9C"
    }'`
    }
    render() {
        var { example } = this.state;   
        return (
            <View style={styles.container}>
                <ScrollView style={{marginTop: 10, width: width}}>
                    <Text style={{fontSize: 18, textAlign: "left", marginLeft: 18, fontWeight: "600"}}>1. Create Token</Text>
                    <Text style={{fontSize: 15, textAlign: "left", marginLeft: 15, marginRight: 15}}>Press "Create Token" button in Inbox</Text>

                    <Text style={{fontSize: 18, textAlign: "left", marginLeft: 18, fontWeight: "600", marginTop: 20}}>2. Share Token</Text>
                    <Text style={{fontSize: 15, textAlign: "left", marginLeft: 15, marginRight: 15}}>Share your "Token" to developer</Text>

                    <Text style={{fontSize: 18, textAlign: "left", marginLeft: 18, fontWeight: "600", marginTop: 20}}>3. Send push notification</Text>
                    <Text style={{fontSize: 15, textAlign: "left", marginLeft: 15, marginRight: 15}}>Now you can send push notification from your Back-End.</Text>

                    <Text style={{fontSize: 18, textAlign: "left", marginLeft: 18, fontWeight: "600", marginTop: 20}}>4. Example</Text>
                    <Text style={{fontSize: 16, textAlign: "left", marginLeft: 15, marginRight: 15}}>Router : http://bluebird.sysmetic.co.kr/send</Text>
                    <Text style={{fontSize: 16, textAlign: "left", marginLeft: 15, marginRight: 15}}>Method : POST</Text>
                    <Text style={{fontSize: 16, textAlign: "left", marginLeft: 15, marginRight: 15, marginTop: 15}}>Example code using curl</Text>
                    <View style={{backgroundColor: "#CDCDCD", width: width - 12, alignSelf: "center", borderRadius: 6}}>
                        <Text style={{textAlign: "left", paddingTop: 10, paddingBottom: 10, paddingLeft: 5, paddingRight: 5}}>{example}</Text>
                    </View>

                    <Text style={{fontSize: 18, textAlign: "left", marginLeft: 18, fontWeight: "600", marginTop: 20}}>5. Full document page</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={this._goDocument}>
                        <Text style={{fontSize: 15, textAlign: "left", marginLeft: 15, marginRight: 15, color: "blue"}}>http://bluebird.sysmetic.co.kr/document</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
    _goDocument = () => {
        Linking.openURL('http://bluebird.sysmetic.co.kr/document');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});
