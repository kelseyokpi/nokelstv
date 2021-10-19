import React from 'react';
import Help from './components/Help';

const HelpView = ({ navigation }) => {
    function navtodash() {
        navigation.goBack('')
    }
    return (
        <Help
            navtodash={navtodash}
        />
    )
}
export default HelpView;