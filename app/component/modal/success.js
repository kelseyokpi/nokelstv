import React, { useEffect } from 'react';
import { View, Text, Image, BackHandler } from 'react-native';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import Button from '../Button';
import { COMMON_FONT_SIZE, FONT_FAMILY_BOLD, UPPERTXTCOLOR } from '../../utils/constant';
export default function success({ message, visible, closeModel }) {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
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
                onHardwareBackPress={() => {
                    closeModel()
                }}
                dialogTitle={
                    <View style={{ alignItems: "center" }}>
                        <Image
                            resizeMode='contain'
                            style={{width: 60, height: 110 }}
                            source={require('../../assets/successFul.png')} 
                            />
                    </View>
                }
                footer={
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <Button
                           style={{ height: 50, borderWidth: 0, width: '100%', borderRadius: 0 }}
                            buttonText='Proceed'
                            buttonLabelStyle={{ fontFamily: FONT_FAMILY_BOLD, fontSize: 20 }}
                            onPress={() => closeModel()}
                        />
                    </View>
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