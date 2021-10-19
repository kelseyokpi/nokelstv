import React from 'react';
import { View } from 'react-native';
import ChatScreen from './components/ChatScreen';
const ChatScreenView = (props) => {
    function NavTodashboard() {
        props.navigation.goBack(null)
    }
    return (
        <View style={{ flex: 1 }}>
            <ChatScreen NavTodashboard={() => NavTodashboard()} />
        </View>
    );
}
export default ChatScreenView;