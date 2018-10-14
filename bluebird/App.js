import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './Home';
import Setting from './Setting';
import Details from './Details';
import Documentation from './Document';
import OpenSource from './OpenSource';
import License from './License';

export default class App extends React.Component {
    render() {
        return (
            <Router backAndroidHandler={this._onBackPress}>
                <Scene key="root">
                    <Scene key="Home" component={Home} initial={true} title="Inbox" rightTitle="Setting" onRight={() => Actions.Setting()}/>
                    <Scene key="Setting" component={Setting} title="Setting" />
                    <Scene key="Details" component={Details} title="Details" />
                    <Scene key="Documentation" component={Documentation} title="Document" />
                    <Scene key="OpenSource" component={OpenSource} title="OpenSource" />
                    <Scene key="License" component={License} title="License" />
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