import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import Profile from './components/Profile';
import { apiCall } from '../../utils/httpClient';
import { BASEURL } from '../../utils/constant';
import ENDPOINTS from '../../utils/apiEndPoints';
import Loader from '../../utils/Loader';
import { UserContext } from '../../utils/UserContext'
import { AuthContext } from '../../component/AuthContext';
import Error from '../../component/modal/error';
import Success from '../../component/modal/success';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function ProfileView({ navigation }) {
  const { signOut } = React.useContext(AuthContext);
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [visible, setVisible] = useState(false)
  const [userData, setUserData] = useContext(UserContext)
  console.log('userData bhar: ', userData);

  useEffect(() => {
  }, [userData]);

  useFocusEffect(
    React.useCallback(() => {
      _handleData()
    }, [])
  );
  async function _handleData() {
    const { data } = await apiCall("post", ENDPOINTS.GET_USER_PROFILE);
    if (data.status === 200) {
      console.log('data.data GET_USER_PROFILE: ', data.data);
      setUserData(data.data);
    }
  }

  const savedata = async (data) => {
    setVisible(true)
    try {
      const response = await apiCall('POST', BASEURL + ENDPOINTS.EDIT_USER_PROFILE, data);
      if (response.data.status === 200) {
        setVisible(false)
        setUserData(response.data.data)
        setVisibleSuccess(true)
        setSuccessMessage('Profile Update Successfully')
      }
      else {
        setVisible(false)
        setVisibleErr(true)
        setErrorMessage(response.data.message)
      }
      // else if (response.data.status === 201) {
      //   setVisible(false)
      //   setVisibleErr(true)
      //   setErrorMessage(response.data.message)
      // }
      // else {
      //   navigation.navigate('SignIn')
      // }
    }
    catch (e) {
      setVisible(false)
      setVisibleErr(true)
      setErrorMessage(e.toString())
    }
  }
  function NavToDashboard() {
    // navigation.goBack(null)
    navigation.navigate("DashBoard")
  }
  function NavToChatScreen() {
    navigation.navigate('ChatScreen')
  }
  function onPressLogout(params) {
    signOut()
  }
  function _handleNavigate() {
    setVisibleSuccess(false)
  }
  async function _handleSubscription() {
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate("Subscription", { email: userData.email, token: userToken, status: 3 })
  }

  async function cancelSubscription() {
    setVisible(true)
    try {
      const { data } = await apiCall('GET', BASEURL + ENDPOINTS.CANCELSUBSCRIPTION)
      console.log('data: ', data);
      if (data.status === 200) {
        setVisible(false)
        setVisibleSuccess(true)
        setSuccessMessage('subscription cancel successfully')
        _handleData()

      } else if (data.status === 201) {
        setVisible(false)
      }
      else if (data.status === 401) {
        setVisible(false)

        // alert(data.message)
      }
    } catch (error) {
      setIsLoading(false)

    }
  }
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      <Profile
        savedata={(data) => savedata(data)}
        NavToDashboard={() => NavToDashboard()}
        NavToChatScreen={() => NavToChatScreen()}
        onPressLogout={onPressLogout}
        userData={userData}
        _handleSubscription={_handleSubscription}
        cancelSubscription={cancelSubscription}
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
  );
}
export default ProfileView;
