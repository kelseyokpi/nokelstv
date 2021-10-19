import React from 'react';
import PrivacyPolicy from './components/PrivacyPolicy';
import { Linking } from 'react-native';

const PrivacyPolicyView = ({ navigation }) => {
    function navtodash() {
        navigation.goBack('')
    }
    function _handlelinking() {
        Linking.openURL('https://reactnative.dev/docs/linking')
    }
    return (
        <PrivacyPolicy
            navtodash={navtodash}
            _handlelinking={_handlelinking}
        />
    )
}
export default PrivacyPolicyView;