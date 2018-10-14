import React from 'react';
import { WebView } from 'react-native';

export default class License extends React.Component {
    render() {
        const { url } = this.props;
        return (
            <WebView source={{uri: url}}/>
        );
    }
}

