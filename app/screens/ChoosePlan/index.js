import React, { useEffect, useState } from 'react';
import {
    View,
} from 'react-native';
import ChoosePlan from './components/ChoosePlan';
import { AuthContext } from '../../component/AuthContext';

const ChoosePlanview = ({ navigation, route }) => {
    const { signIn } = React.useContext(AuthContext);
    const { email, token } = route.params;
    function NavToSubscription() {
        navigation.navigate('Subscription', { email: email, token: token, status: 1 })
    }
    function navtosignin() {
        navigation.navigate('SignIn')
    }
    function navtologout() {
        // navigation.navigate('DashBoard')
        signIn(token)
    }
    return (
        <View style={{ flex: 1 }}>
            <ChoosePlan
                navtosignin={navtosignin}
                navtologout={navtologout}
                NavToSubscription={() => NavToSubscription()}
            />
        </View>
    )
}

export default ChoosePlanview;
