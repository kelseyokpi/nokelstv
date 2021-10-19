import React, { useEffect } from 'react';
import { View, Text, Image, BackHandler, TouchableOpacity } from 'react-native';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import Button from '../Button';
import { FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, COMMON_FONT_SIZE, UPPERTXTCOLOR } from '../../utils/constant';
export default function error({ message, visible, closeModel }) {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    }, []);
    const backAction = () => {
        closeModel()
    };
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
                dialogTitle={
                    <View style={{ alignItems: "center", width: '100%', paddingTop: 10, paddingBottom: 10 }}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 70, height: 70 }}
                            source={require('../../assets/errorDown.png')} />
                    </View>
                }
                footer={
                    <TouchableOpacity onPress={() => closeModel()} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            style={{ height: 50, borderWidth: 0, width: '100%', borderRadius: 0 }}
                            buttonText='OK'
                            buttonLabelStyle={{
                                fontFamily: FONT_FAMILY_BOLD,
                                fontSize: 20
                            }}
                            onPress={() => closeModel()}
                        />
                    </TouchableOpacity>
                }
            >
                <DialogContent>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{
                            fontFamily: FONT_FAMILY_BOLD,
                            color: UPPERTXTCOLOR,
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