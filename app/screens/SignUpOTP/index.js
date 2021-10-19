import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import SignUpOTP from './components/SignUpOTP';
import { apiCall, setDefaultHeader } from '../../utils/httpClient';
import { BASEURL } from '../../utils/constant';
import ENDPOINTS from '../../utils/apiEndPoints';
import Loader from '../../utils/Loader';
import Error from '../../component/modal/error';
import Success from '../../component/modal/success';
import { AuthContext } from '../../component/AuthContext';
import { UserContext } from '../../utils/UserContext';
import auth from '@react-native-firebase/auth';

const ForgotPasswordFieldView = ({ route, navigation }) => {
    const { email, token, confirmation, navType, phoneNumber } = route.params;
    const { signIn } = React.useContext(AuthContext);
    const [visible, setVisible] = useState(false)
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmOtp, setConfirmOtp] = useState(confirmation);
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [otp, setOtp] = useState();
    const [verificationMessage, setVerificationMessage] = useState('We have sent verification code on your mobile.')
    const [userData, setUserData] = React.useContext(UserContext)

    const otpresend = async () => {
        try {
            console.log('phoneNumber: ', phoneNumber);
            setVisible(true)
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber,true);
            setVisible(false)
            setConfirmOtp(confirmation)
            setVerificationMessage("OTP successfully send to your mobile.")
        }
        catch (e) {
            console.log('e: ', e);
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage('Cant send verification code, Please try again !')
        }
    }

    function onAuthStateChanged(user) {
        if (user) {
            console.log('user:111111 ', user);
            verifyUser()
        }
    }

    useEffect(() => {
        setVisible(false)
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    const OtpUpdate = async () => {
        setVisible(true)
        try {
            await confirmOtp.confirm(otp);
            verifyUser()
        }
        catch (e) {
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage('Verification code is wrong, Please try again !')
        }
    }
    async function verifyUser() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        const response = await apiCall('GET', BASEURL + ENDPOINTS.VERIFY_USER);
        if (response.data.status === 200) {
            console.log('response: ', response.data.data.token);
            setVisible(false)
            await setDefaultHeader('token', response.data.data.token);
            await setUserData(response.data.data)
            console.log('response.data.data): ', response.data.data);
            setVisibleSuccess(true)
            setSuccessMessage("Verification Successfully")
        }
        else {
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage(response.data.message)
        }
    }
    function Navtoback() {
        navigation.goBack(null)
    }
    async function _handleNavigate() {
        setVisibleSuccess(false)
        await setDefaultHeader("token", token)
        navType === 1 ?
            navigation.navigate('ChoosePlan', { email: email, token: token })
            : signIn(token)
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <SignUpOTP
                Navtoback={Navtoback}
                otpresend={() => otpresend()}
                OtpUpdate={() => OtpUpdate()}
                setOtp={setOtp}
                verificationMessage={verificationMessage}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => _handleNavigate(setVisibleSuccess(false))}
            />
        </View>
    )
}
export default ForgotPasswordFieldView;
