import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import WebView from 'react-native-webview'
import Rating from '../../../component/Rating'
import styles from './styles'
import { COMMON_BACKGROUND_COLOR } from '../../../utils/constant'
const Newsdetails = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                onPress={()=> props.goback()}
                style={styles.hdrimg}>
                    <Image
                        source={
                            require('../../../assets/header-back-btn.png')
                        }
                    />
                </TouchableOpacity>
                <Text style={styles.hdrtxt}>
                    News Detail
                </Text>
            </View>
            <View style={styles.body}>
                <Image
                    style={styles.bdymnimg}
                    resizeMode={"cover"}
                    source={
                        {
                            uri: props.url.poster_url + props.NewsDetailData.image
                        }
                    }
                />
                <View style={styles.mntxtvw}>
                    <Text style={styles.maintxt}>
                        {props.NewsDetailData.title}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.locationimg}>
                        <Image
                            resizeMode={"cover"}
                            style={{
                                paddingHorizontal: 10,
                                paddingVertical: 15
                            }}
                            source={require('../../../assets/profile-marker-icon.png')}
                        />
                    </View>
                    <View style={styles.bxcon}>
                        <Text style={styles.lctntxt}>
                            Vancouver, Canada
                        </Text>
                        <Text style={styles.smalltxt}>
                            {props.NewsDetailData.update_date}
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Rating />
                        </View>
                    </View>
                </View>
                {/* <Text style={styles.paragraph} >
                    </Text> */}
                <WebView
                    style={{
                        // height: 60,
                        // backgroundColor: COMMON_BACKGROUND_COLOR,
                    }}
                    originWhitelist={['*']}
                    source={{ html: props.NewsDetailData.description }}
                />
                <Image
                    style={styles.shareimg}
                    source={require("../../../assets/sharebtn.png")}
                />
            </View>
        </View>
    )
}
export default Newsdetails;