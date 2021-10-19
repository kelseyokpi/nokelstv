import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import ForgotPasswordField from './components/ForgotPasswordField';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import Loader from '../../utils/Loader';
import Error from '../../component/modal/error';
import Success from '../../component/modal/success';
const ForgotPasswordFieldView = ({ route, navigation }) => {
    const { email } = route.params;
    const [visible, setVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const PasswordUpdate = async (data) => {
        setVisible(true)
        try {
            const response = await apiCall('POST', ENDPOINTS.NEW_PASSWORD_UPDATE, data);
            if (response.data.status === 200) {
                setVisible(false)
                setVisibleSuccess(true)
                setSuccessMessage('Password Change Successfully')
            }
            else  {
                setVisible(false)
                setVisibleErr(true)
                setErrorMessage(response.data.message)
            }
         /*    else if(response.data.status === 201 ) {
                setVisible(false)
                setVisibleErr(true)
                setErrorMessage(response.data.message)
            }
            else {
                navigation.navigate('SignIn')
            } */
        }
        catch (e) {
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage(e.toString())
        }
    }
    function Navtoback() {
        navigation.goBack(null)
    }
    function _handleNavigation() {
        setVisibleSuccess(false)
        navigation.navigate('SignIn')
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <ForgotPasswordField
                Navtoback={Navtoback}
                PasswordUpdate={(data) => PasswordUpdate(data)}
                setErrorMessage={setErrorMessage}
                setVisibleErr={setVisibleErr}
                setVisible={setVisible}
                email={email}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => _handleNavigation(setVisibleSuccess(false))}
            />
        </View>
    )
}
export default ForgotPasswordFieldView;
