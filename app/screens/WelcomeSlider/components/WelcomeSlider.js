import React from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    StatusBar,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Styles from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import WebView from 'react-native-webview'
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 1,
        bgtxt: 'Watch on any device',
        bdyinfo: 'Stream on your phone, tablets ,',
        bdyinfo2: 'laptop and TV.',
        image: require('../../../assets/slider1.jpeg'),
        //image: require('../../../assets/getstarted-bg-l1.png'),
        backgroundColor: '#59b2ab',
        color: '#09F1EA'
    },
    {
        key: 2,
        bgtxt: '3,2,1... Download!',
        bdyinfo: 'Always have something to ',
        bdyinfo2: 'watch offline',
        image: require('../../../assets/slider2.jpeg'),
        backgroundColor: '#febe29',
        color: '#09F1EA'
    },
    {
        key: 3,
        bgtxt: 'No commitment contract',
        bdyinfo: 'Join today, cancel anytime',
        bdyinfo2: '',
        image: require('../../../assets/slider3.jpeg'),
        backgroundColor: '#22bcb5',
        color: '#09F1EA'
    },
    {
        key: 4,
        bgtxt: 'Unlimited entertainment one low price',
        bdyinfo: 'Stream and download as much as',
        bdyinfo2: 'you want,no extra fees.',
        image: require('../../../assets/slider1.jpeg'),
        backgroundColor: '#22bcb5',
        color: '#09F1EA'
    }
];
const WelcomeSlider = (props) => {
    _renderItem = ({ item }) => {

        return (
            <View style={{ flex: 1 }} key={item.key}>
                <StatusBar translucent={true} backgroundColor={'transparent'} />
                <ImageBackground source={item.image}
                    style={{ flex: 5,  }} >
                    <View style={Styles.body}>
                        <Text style={Styles.bgtxt}>{item.bgtxt}</Text>
                        <Text style={Styles.bdyinfo}>{item.bdyinfo}</Text>
                        <Text style={Styles.bdyinfo}>{item.bdyinfo2}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:"center"  }}>
                        <TouchableOpacity
                            onPress={props.NavTosignup}
                            style={Styles.btncon}>
                            <Text style={Styles.btncontxt}>
                                TRY IT NOW
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image style={Styles.logoimg}
                    source={require('../../../assets/header-logo.png')} />
                <View style={Styles.hdrscdvw}>
                    <TouchableOpacity onPress={() => props.setShowModal(true)} >
                        <Text style={Styles.hdrtctxt}> PRIVACY </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.setShowTermsModal(true)} >
                        <Text style={Styles.hdrtctxt}> TERMS OF USE </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navToHelp()} >
                        <Text style={Styles.hdrtctxt}> HELP </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.NavToSignIn()} >
                        <Text style={Styles.hdrtctxt}> SIGN IN </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.ShowModal}
                onRequestClose={() => {
                    props.setShowModal(!props.ShowModal);
                }} >
                <TouchableOpacity
                    onPress={() => props.onPressCloseWebview()}
                    style={Styles.toucmodalvwe}>
                    <Image style={Styles.goimg}
                        source={require('../../../assets/pricing-uncheck-icon.png')}
                    />
                </TouchableOpacity>
                <WebView style={{ height: "auto" }} originWhitelist={['*']}
                    source={{ uri: 'https://nokelstv.com/privacypolicyMobile' }}
                />
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.ShowTermsModal}
                onRequestClose={() => {
                    props.setShowTermsModal(!props.ShowTermsModal);
                }} >
                <TouchableOpacity
                    onPress={() => props.setShowTermsModal(!props.ShowTermsModal)}
                    style={Styles.toucmodalvwe}>
                    <Image style={Styles.goimg}
                        source={require('../../../assets/pricing-uncheck-icon.png')}
                    />
                </TouchableOpacity>
                <WebView style={{ height: "auto" }} originWhitelist={['*']}
                    source={{ uri: 'https://nokelstv.com/terms' }}
                />
            </Modal>
            <AppIntroSlider
                data={slides}
                renderItem={(item) => _renderItem(item)}
                keyExtractor={item => item.key.toString()}
                activeDotStyle={{
                    backgroundColor: "aqua",
                    marginBottom: windowWidth / 1.7,
                }}
                dotStyle={{
                    backgroundColor: "grey",
                    marginBottom: windowWidth / 1.7,
                }}
                showNextButton={false}
                showDoneButton={false}
            />
        </View>
    )
}
export default WelcomeSlider;