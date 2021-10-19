import React, { useState, Fragment } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    StatusBar,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import styles from './styles'
import { COMMONTHEMECOLOR, FONT_FAMILY_REGULAR, GREY_COLOR_CODE, LIGHT_GREY_COLOR_CODE, WHITE_COLOR_CODE }
    from '../../../utils/constant';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';

const SeasonCategory = (props) => {
    // const [selectedId] = useState(null);
    const DATA = [
        {
            id: 1,
            seasoncategoryimg: require('../../../assets/steve.jpeg'),
            episodenmetype: "Ep.1 -Captain America 13: Season Premiere",
            langtmwcate: "Hindi | Reality | 2hr 24 min"
        },
        {
            id: 2,
            seasoncategoryimg: require('../../../assets/steve.jpeg'),
            episodenmetype: "Ep.2 -Captain America winter solider 14: Season Premiere",
            langtmwcate: "Hindi | Reality | 2hr 24 min"
        },
        {
            id: 3,
            seasoncategoryimg: require('../../../assets/steve.jpeg'),
            episodenmetype: "Ep.3 -Captain America 13: Season Premiere",
            langtmwcate: "Hindi | Reality | 2hr 24 min"
        },
        {
            id: 4,
            seasoncategoryimg: require('../../../assets/steve.jpeg'),
            episodenmetype: "Ep.4 -Captain America Ragnarok 13: Season Premiere",
            langtmwcate: "Hindi | Reality | 2hr 24 min"
        },

    ];
    const FlatItem = ({ item }) =>
    (
        <TouchableOpacity
            onPress={() => props.navtoEpisodeDetails(item)}
            style={[styles.mainvwe]}>
            <Image style={{ height: height / 6, width: width / 4, borderRadius: 7 }}
                source={{ uri: props.url.poster_url + item.episode_poster }}
            />
            <View style={styles.descriptiontxtvwe}>
                <Text style={styles.pisodenmae}>
                    Episode no {item.episode_no}
                </Text>
                <Text style={styles.tme}>
                    {item.serial_name}
                </Text>
            </View>
        </TouchableOpacity>
    );
    const { height, width } = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => props.navtoback()}
                    style={styles.hdrimg}>
                    <Image
                        source={require("../../../assets/header-back-btn.png")}
                    />
                </TouchableOpacity>
                <Image style={styles.hdrlogo}
                    source={require("../../../assets/header-logo.png")} />
            </View>
            <View style={[styles.body]}>
                <ScrollView
                    style={{ flexGrow: 5 }}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, paddingTop: 5 }}>
                        <View style={{ flex: 2, }}>
                            <View style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 15, flexDirection: 'row' }}>
                                <Text style={{
                                    fontFamily: FONT_FAMILY_REGULAR,
                                    fontSize: 16, color: WHITE_COLOR_CODE
                                }}>
                                    All Epidodes
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 4, }}>
                            <FlatList
                                data={props.dataget}
                                renderItem={FlatItem}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default SeasonCategory;