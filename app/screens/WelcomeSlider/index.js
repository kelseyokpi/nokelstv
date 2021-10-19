import React, { useState } from 'react';
import WelcomeSlider from './components/WelcomeSlider';
const WelcomeSliderview = ({ navigation }) => {
    const [ShowModal, setShowModal] = useState(false);
    const [ShowTermsModal, setShowTermsModal] = useState(false);
    function NavToSignIn() {
        navigation.navigate("SignIn")
    }
    function NavTosignup() {
        navigation.navigate("SignUp")
    }
    function navToHelp() {
        navigation.navigate("Help")
    }
    function navToPrivacy() {
        navigation.navigate("PrivacyPolicy")
    }
    function openPopup() {
        setShowModal(true)
    }
    function closePopup() {
        setShowModal(false)
    }
    function onPressCloseWebview() {
        setShowModal(false)
    }
    return (
        <WelcomeSlider
            closePopup={closePopup}
            openPopup={openPopup}
            NavToSignIn={() => NavToSignIn()}
            NavTosignup={NavTosignup}
            navToHelp={navToHelp}
            navToPrivacy={navToPrivacy}
            ShowModal={ShowModal}
            setShowModal={setShowModal}
            onPressCloseWebview={onPressCloseWebview}
            ShowTermsModal={ShowTermsModal}
            setShowTermsModal={setShowTermsModal}
        />
    )
}
export default WelcomeSliderview;
