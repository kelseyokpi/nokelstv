import React, { useEffect } from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import styles from './style';
import { COMMON_BACKGROUND_COLOR } from '../../../utils/constant';

const DashBoard = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: COMMON_BACKGROUND_COLOR }]}>
            <View style={styles.body}>
                <FlatList
                    data={props.MainHeadingData}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => props._renderItems(item, index)}
                    // onRefresh={() => props.onRefresh()}
                    // refreshing={props.refresh}
                />
            </View>
        </View>
    )
}
export default DashBoard;