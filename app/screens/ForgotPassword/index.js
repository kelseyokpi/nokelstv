import React, { useState, useContext } from 'react';
import ForgotPassword from './components/ForgotPassword';
import { apiCall } from '../../utils/httpClient';
import { BASEURL } from '../../utils/constant';
import ENDPOINTS from '../../utils/apiEndPoints';
import { View } from 'react-native'
import Loader from '../../utils/Loader';
import Error from '../../component/modal/error';
import {
    FONT_FAMILY_BOLD,
    COMMONTXTCOLOR,
    UPPERTXTCOLOR,
} from '../../utils/constant'
const ForgotPasswordView = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const [isFocusedForgotPassword, setIsfocusedForgotPassword] = useState(true)
    const [EmailAddress, setForgotPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);

    //ForgotPassword
    const labelStyle = {
        position: 'absolute',
        left: 25,
        top: isFocusedForgotPassword ? 22 : 11,
        justifyContent: "center",
        fontSize: isFocusedForgotPassword ? 17 : 13,
        color: isFocusedForgotPassword ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD,
    };

    function _handleFocusForgotPassword() {
        setIsfocusedForgotPassword(false)
    }
    function _handleBlurForgotPassword() {
        if (EmailAddress === '')
            setIsfocusedForgotPassword(true);
    }

    function validationFrom() {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (EmailAddress == "") {
            setErrorMessage('Please enter email address');
            setVisibleErr(true)
            return false;
        } if (reg.test(EmailAddress) === false) {
            setErrorMessage("please enter correct email address");
            setVisibleErr(true)
            return false;
        }
        return true;
    }

    const _handleForgotpassword = async () => {
        const valid = await validationFrom()
        if (valid) {
            setVisible(true)
            try {
                const params = {
                    email: EmailAddress
                }
                const response = await apiCall('post', BASEURL + ENDPOINTS.FORGOT_PASSWORD, params);
                if (response.data.status === 200) {
                    setVisible(false)
                    navigation.navigate('ForgotPasswordField', { email: EmailAddress })
                }
                else  {
                    setVisible(false)
                    setVisibleErr(true)
                    setErrorMessage(response.data.message)
                }
                // else if(response.data.status === 201 ) {
                //     setVisible(false)
                //     setVisibleErr(true)
                //     setErrorMessage(response.data.message)
                // }
                // else {
                //     navigation.navigate('SignIn')
                // }
            } catch (error) {
                setVisible(false)
                setVisibleErr(true)
                setErrorMessage(error.toString())
            }
        }
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <ForgotPassword
                _handleFocusForgotPassword={_handleFocusForgotPassword}
                _handleBlurForgotPassword={_handleBlurForgotPassword}
                labelStyle={labelStyle}
                setForgotPassword={setForgotPassword}
                EmailAddress={EmailAddress}
                _handleForgotpassword={_handleForgotpassword}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
        </View>
    )
}
export default ForgotPasswordView;
