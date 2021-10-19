import React, { useState } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import Button from '../Button';
import { COMMON_FONT_SIZE, DARK_GREY_COMMON_COLOR, FONT_FAMILY_BOLD, UPPERTXTCOLOR } from '../../utils/constant';
export default function warning({ message, visible, closeModel, _handlebutton }) {
    return (
        <View>
            <Dialog
                visible={visible}
                width={0.8}
                useNativeDriver={true}
                dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                onTouchOutside={() => {
                    closeModel()
                }}
                onHardwareBackPress={() => {
                    closeModel()
                }}
                dialogTitle={
                    <View style={{ alignItems: "center" }}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 60, height: 100 }}
                            source={require('../../assets/errorDown.png')} 
                            />
                    </View>
                }
                footer={
                    <View style={{ flexDirection: "row", paddingBottom: 15 }}>
                        <Button
                            style={{ flex: 1,  paddingBottom:11, padding: 20, height: Platform.OS === "ios" ? 65:55, alignItems: 'center', justifyContent: 'center' }}
                            buttonText='Cancel'
                            buttonLabelStyle={{ fontFamily: FONT_FAMILY_BOLD, fontSize: 18 }}
                            onPress={() => closeModel()}
                        />
                        <Button
                            style={{
                                flex: 1,
                                paddingBottom:11,
                                padding: 20,
                                backgroundColor: UPPERTXTCOLOR,
                                height: Platform.OS === "ios" ? 65:55,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            buttonText='Confirm'
                            buttonLabelStyle={{
                                fontFamily: FONT_FAMILY_BOLD,
                                fontSize: 18,
                            }}
                            onPress={() => _handlebutton()}
                        />
                    </View>
                }
            >
                <DialogContent>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{
                            fontFamily: FONT_FAMILY_BOLD,
                            color: DARK_GREY_COMMON_COLOR,
                            textAlign: "center",
                            fontSize: COMMON_FONT_SIZE,
                            lineHeight: 25
                        }}>
                            {message}
                        </Text>
                    </View>
                </DialogContent>

            </Dialog>
        </View>
    )
};