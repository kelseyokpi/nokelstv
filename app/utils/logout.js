import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View } from 'react-native';
function LogOut({ navigation }) {
    useEffect(() => {
        navto();
    },
        []);
    const navto = async () => {
        try {
            await AsyncStorage.removeItem('localuserdata')
            navigation.navigate('App')
        } catch (e) {
            // saving error
        }
    }
    return (<View />)
}
export default LogOut;