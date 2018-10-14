import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Modal, Actions } from 'react-native-router-flux';
import Home from './Home';

export default class App extends React.Component {
    render() {
        return (
            <Router backAndroidHandler={this._onBackPress}>
                <Scene key="root" hideNavBar>
                    <Scene key="Home" hideNavBar component={Home} initial={true} type="replace"/>
                </Scene>
            </Router>
        );
    }

    _onBackPress = () => {
        if(Actions.state.index === 0){
            return false;
        } else {
            Actions.pop();
            return true;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
