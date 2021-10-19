import React from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet, ScrollView
} from 'react-native';
import Dialog, { SlideAnimation } from 'react-native-popup-dialog';
import { FONT_FAMILY_REGULAR, COMMONBTNCOLOR, COMMONBLACKTXTCOLOR, BLACK_COLOR_CODE, WHITE_COLOR_CODE, COMMONTHEMECOLOR } from '../../../utils/constant';
import BouncyCheckbox from "react-native-bouncy-checkbox";
const FilterPopUpView = (props) => {
    return (
        <Dialog
            width={1}
            height={0.6}
            visible={props.status}
            rounded={true}
            actionsBordered
            onDismiss={() => props.closePopup()}
            dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
            dialogStyle={{
                position: 'absolute',
                bottom: 0
            }}
        >
            <View style={{ flex: 1, backgroundColor: "#535353" }}>
                <View style={styles.DialogHeading}>
                    <Text style={styles.HeadingTxtStyle}>
                        Filters
                        </Text>
                    <TouchableOpacity
                          onPress={() => { props.closePopup(false) }}
                     > 
                        <Image
                            source={require("../../../assets/cross_icon_pricing.png")}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <TouchableOpacity style={styles.MainCheckTouch}>
                        <BouncyCheckbox
                            isChecked={false}
                            iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                            textColor={WHITE_COLOR_CODE}
                            unfillColor="#535353"
                            iconColor="#535353"
                            text="Food"
                            fillColor={COMMONBTNCOLOR}
                            fontFamily={FONT_FAMILY_REGULAR}
                            onPress={(checked) => console.log("Checked: ", checked)}
                            fontSize={16}
                            disableTextDecoration={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MainCheckTouch}>
                        <BouncyCheckbox
                            isChecked={false}
                            iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                            textColor={WHITE_COLOR_CODE}
                            unfillColor="#535353"
                            iconColor="#535353"
                            text="GEC"
                            borderColor='#ffffff'
                            fillColor={COMMONBTNCOLOR}
                            fontFamily={FONT_FAMILY_REGULAR}
                            onPress={(checked) => console.log("Checked: ", checked)}
                            fontSize={16}
                            disableTextDecoration={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MainCheckTouch}>
                        <BouncyCheckbox
                            isChecked={false}
                            iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                            textColor={WHITE_COLOR_CODE}
                            unfillColor="#535353"
                            iconColor="#535353"
                            text="Infotainment"
                            fillColor={COMMONBTNCOLOR}
                            fontFamily={FONT_FAMILY_REGULAR}
                            onPress={(checked) => console.log("Checked: ", checked)}
                            fontSize={16}
                            disableTextDecoration={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MainCheckTouch}>
                        <BouncyCheckbox
                            isChecked={false}
                            iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                            textColor={WHITE_COLOR_CODE}
                            unfillColor="#535353"
                            iconColor="#535353"
                            text="Kids"
                            fillColor={COMMONBTNCOLOR}
                            fontFamily={FONT_FAMILY_REGULAR}
                            onPress={(checked) => console.log("Checked: ", checked)}
                            fontSize={16}
                            disableTextDecoration={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MainCheckTouch}>
                        <BouncyCheckbox
                            isChecked={false}
                            iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                            textColor={WHITE_COLOR_CODE}
                            unfillColor="#535353"
                            iconColor="#535353"
                            text="Lifestyle"
                            fillColor={COMMONBTNCOLOR}
                            fontFamily={FONT_FAMILY_REGULAR}
                            onPress={(checked) => console.log("Checked: ", checked)}
                            fontSize={16}
                            disableTextDecoration={true}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MainCheckTouch}>
                        <BouncyCheckbox
                            isChecked={false}
                            iconStyle={{ borderColor: COMMONBLACKTXTCOLOR }}
                            textColor={WHITE_COLOR_CODE}
                            unfillColor="#535353"
                            iconColor="#535353"
                            text="Movies"
                            fillColor={COMMONBTNCOLOR}
                            fontFamily={FONT_FAMILY_REGULAR}
                            onPress={(checked) => console.log("Checked: ", checked)}
                            fontSize={16}
                            disableTextDecoration={true}
                        />
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ flexDirection: "row", borderTopWidth: 1, borderColor: "#484848" }}>
                    <TouchableOpacity style={styles.ftrcon}>
                        <Text style={styles.ftrtxt1}>
                            RESET
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { props.closePopup(false) }}
                        style={styles.ftrcon}>
                        <Text style={styles.ftrtxt2}>
                            APPLY
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Dialog>
    )
}
export default FilterPopUpView;
const styles = StyleSheet.create({
    ftrcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },
    ftrtxt1: {
        color: "#ffffff",
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize:16
    },
    ftrtxt2: {
        color: COMMONTHEMECOLOR,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 16
    },
    DialogHeading: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 15,
        justifyContent: 'space-between'
    },
    HeadingTxtStyle: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE,
        fontSize: 20
    },
    MainCheckTouch: {
        alignSelf: "flex-start",
        paddingLeft: "2%",
        width: '48%',
        height: 45,
        borderRadius: 21
    },
})
