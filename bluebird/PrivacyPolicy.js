import React from 'react';
import { WebView } from 'react-native';

export default class PrivacyPolicy extends React.Component {
    render() {
        const { url } = this.props;
        return (
            <WebView source={{uri: url}}/>
        );
    }
}