import React from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet, ScrollView
} from 'react-native';
import Dialog, { SlideAnimation } from 'react-native-popup-dialog';
import { FONT_FAMILY_REGULAR, COMMONBTNCOLOR, COMMONBLACKTXTCOLOR, BLACK_COLOR_CODE } from '../../../utils/constant';
import BouncyCheckbox from "react-native-bouncy-checkbox";
const FilterPopUpView = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Dialog
                width={1}
                height={0.9}
                visible={props.status}
                rounded={true}
                actionsBordered
                onDismiss={() => props.closePopup()}
                onHardwareBackPress={() =>
                    props.closePopup(false)
                }
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                dialogStyle={{
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    position: 'absolute',
                    bottom: 0
                }}
            >
                <View style={styles.DialogHeading}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => {
                                props.closePopup(false)
                            }}>
                            <Image style={styles.BackImgStyle} source={require('../../../assets/filter-back-icon.png')} />
                        </TouchableOpacity>
                        <Text style={styles.HeadingTxtStyle}>Filters
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.ResetBtnStyle}>
                            <Image source={require('../../../assets/reset-icon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                props.closePopup(false)
                            }}
                            style={styles.SaveBtnStyle}>
                            <Image source={require('../../../assets/apply-icon.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    {/* SELECT MOVIE TYPE */}
                    <View>
                        <View style={styles.MoviesTypeView}>
                            <Text style={styles.MoviesTypeTxt}>Movies Type</Text>
                        </View>
                        <View style={styles.MainContainerStyle}>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Comedy"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Animation"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.MainContainerStyle}>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Romantic"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Action"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.BorderStyleView} />
                    {/* SELECT CATEGORY */}
                    <View>
                        <View style={styles.MoviesTypeView}>
                            <Text style={styles.MoviesTypeTxt}>Select Category</Text>
                        </View>
                        <View style={styles.MainContainerStyle}>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Marathi"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Punjabi"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.MainContainerStyle}>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Tollywood"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Bollywood"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20, marginLeft: 20 }}>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Hollywood"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.BorderStyleView} />
                    {/* SELECT LANGUAGE */}
                    <View style={{ marginBottom: 40 }}>
                        <View style={styles.MoviesTypeView}>
                            <Text style={styles.MoviesTypeTxt}>Select Language</Text>
                        </View>
                        <View style={styles.MainContainerStyle}>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Punjabi"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Marathi"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.MainContainerStyle}>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="Hindi"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.MainCheckTouch}>
                                <BouncyCheckbox
                                    isChecked={false}
                                    iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                                    textColor="#616161"
                                    unfillColor="#f8f8f8"
                                    iconColor="#f8f8f8"
                                    text="English"
                                    fillColor={COMMONBTNCOLOR}
                                    fontFamily={FONT_FAMILY_REGULAR}
                                    onPress={(checked) => console.log("Checked: ", checked)}
                                    fontSize={14}
                                    disableTextDecoration={true}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Dialog>
        </View >
    )
}
export default FilterPopUpView;
const styles = StyleSheet.create({
    DialogHeading: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between'
    },
    BackImgStyle: {

    },
    HeadingTxtStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        marginLeft: 15,
        fontSize: 21
    },
    ResetBtnStyle: {
        marginRight: 15
    },
    SaveBtnStyle: {
        marginRight: 10,
        top: 3
    },
    MoviesTypeView: {
        marginTop: 20,
        marginLeft: 15
    },
    MoviesTypeTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: BLACK_COLOR_CODE,
        fontSize: 18
    },
    MainContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20
    },
    MainCheckTouch: {
        alignSelf: "flex-start",
        paddingLeft: "2%",
        width: '48%',
        height: 45,
        borderRadius: 21
    },
    BorderStyleView: {
        borderWidth: 0.7,
        borderColor: '#e4e4e4',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    }
})
