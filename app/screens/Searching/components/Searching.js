import React from 'react';
import { Text,Platform } from 'react-native';
import {
    View,
    Image,
    FlatList,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {
    FONT_FAMILY_BOLD,
    COMMONBTNCOLOR,
    BLACK_COLOR_CODE,
    WHITE_COLOR_CODE,
    LIGHT_GREY_COLOR_CODE,
    FONT_FAMILY_REGULAR,
} from '../../../utils/constant'
import styles from './styles'

const Searching = (props) => {
    function _renderCategoriesItems(item) {
        return (
            <FlatList
                data={item}
                numColumns={2}
                // showsVerticalScrollIndicator={false}
                // showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.onnavtomoviedetail(item)}
                        style={{ margin: 5 }} >
                        <Image
                            style={styles.imgmvs}
                            resizeMode={"stretch"}
                            source={{ uri: props.BaseUrl.movie_poster_url + item.movie_poster }}
                        />
                    </TouchableOpacity>
                )}
            />
        )
    }
    function _renderCategories(item) {
        return (
            <>
                <View style={styles.hdgtxt}>
                    {/* <Text style={styles.headings}>
                        {item.item.name}
                    </Text> */}
                    {/* <TouchableOpacity
                        onPress={() => props.onnavtoseeall()}>
                        <Text
                            style={styles.hdgtxt2}>
                            See all
                        </Text>
                    </TouchableOpacity> */}
                </View>
                <View style={{
                    borderWidth: 1,
                    marginLeft: 5,
                    marginRight: 5,
                    borderColor: '#373737',
                    marginTop: '2%',
                    marginBottom: "2%"
                }} />
                {_renderCategoriesItems(props.Categories)}
            </>
        )
    }
    return (
        <View style={[styles.container, { backgroundColor: BLACK_COLOR_CODE }]}>
            <ScrollView>
                <View style={styles.mainvwe}>
                <View style={styles.headbckvwe}>
                    <TouchableOpacity onPress={()=>props.goBack()}>
                        <Image style={{width:50,height:30}}
                            source={require('../../../assets/header-back-btn.png')}
                        />
                    </TouchableOpacity>
                </View>
                    <View style={{ marginTop: '5%' }}>
                        <FlatList
                            data={props.MainHeadingData}
                            horizontal
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            style={{ marginTop: 5, marginBottom: 5 }}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => props._renderItems(item, index)}
                        />
                    </View>
                    <View style={styles.srchtxtinptvwe}>
                        <View style={{
                            justifyContent: 'space-between', alignContent: 'center',
                            padding: 10, flexDirection: 'row',
                        }}>
                            <TextInput
                                onChangeText={(text) => props.setSearchInput(text)}
                                value={props.SearchInput}
                                style={{
                                    backgroundColor: LIGHT_GREY_COLOR_CODE, width: '75%',
                                    borderRadius: 10,paddingLeft:10,
                                    fontSize: 15, color: WHITE_COLOR_CODE, fontFamily: FONT_FAMILY_BOLD
                                }}
                                placeholder={'Search'}
                                placeholderTextColor={BLACK_COLOR_CODE}
                            />
                            <View>
                                <TouchableOpacity
                                    onPress={() => props._handelFilter()}
                                    // onPress={() => props._handleSearching()}
                                    style={{
                                        width: 80, height: 55, borderWidth: 1,
                                        borderRadius: 10,
                                        backgroundColor: COMMONBTNCOLOR,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../../../assets/header-search-icon.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 5.1 }}>
                        {/* <FlatList
                            numColumns={2}
                            showsHorizontalScrollIndicator={false}
                            data={DATA}
                            renderItem={Item}
                            keyExtractor={(item) => item.id}
                        /> */}
                        {/* <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.Trending}
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                            ListEmptyComponent={() =>
                                <View style={{
                                    flex: 1,
                                    paddingTop: 25,
                                    paddingLeft: 18
                                }}>
                                    <Text style={{
                                        fontFamily: FONT_FAMILY_REGULAR, fontSize: 15,
                                        color: LIGHT_GREY_COLOR_CODE, textAlign: 'center'
                                    }}>
                                        Search Your Favorites Movies . . .
                                  </Text>
                                </View>
                            }
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    onPress={() => props.onnavtomoviedetail(item)}
                                    style={{ margin: 5 }}>
                                    <Image
                                        style={styles.imgmvs}
                                        resizeMode={"stretch"}
                                        // source={{ uri: 'file://' + item.trending_path_name }}
                                        source={{ uri: 'file://' + item.trending_path_name }}
                                    />
                                </TouchableOpacity>
                            )}
                        /> */}
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.Categories}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={(item) => _renderCategories(item)}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Searching;