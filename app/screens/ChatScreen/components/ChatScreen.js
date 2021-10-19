import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import styles from './styles'
import { FONT_FAMILY_REGULAR } from '../../../utils/constant';
const ChatScreen = props => {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity
                    flex={0.5}
                    onPress={() => props.NavTodashboard()}>
                    <Image
                        style={styles.backBtn}
                        source={require('../../../assets/header-back-btn.png')}
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', flex: 5 }}>
                    <Image
                        style={styles.dp}
                        source={require('../../../assets/demo-profile-image.png')} />
                    <Text style={styles.headertxt}>
                        Rowan Chestnut
                    </Text>
                </View>
                <View flex={0.5} style={{ justifyContent: "center" }}>
                    <Image
                        style={{ alignSelf: "flex-end" }}
                        source={require('../../../assets/header-more-btn.png')} />
                </View>
            </View>
            <View style={styles.body}>

            </View>
            <View style={styles.footer} >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ margin: 10 }}>
                        <Image source={require('../../../assets/chat-smiley-icon.png')}></Image>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Image source={require('../../../assets/chat-camera-icon.png')}></Image>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Image source={require('../../../assets/chat-photo-icon.png')}></Image>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Image source={require('../../../assets/chat-mic-icon.png')}></Image>
                    </View>
                </View>
                <View style={styles.cftrvw}>
                    <View flex={5} >
                        <View style={styles.chatfooter}>
                            <TextInput
                                style={{ fontSize: 16, padding: 8 }}
                                placeholder='write message'
                                placeholderTextColor='#000'
                                style={{fontFamily:FONT_FAMILY_REGULAR}}
                            />
                        </View>
                    </View>
                    <View flex={1} style={{justifyContent:"center"}}>
                    <Image
                        source={require('../../../assets/chat-send-btn.png')}/>
                        </View>
                </View>
            </View>
        </View >
    )
}
export default ChatScreen;