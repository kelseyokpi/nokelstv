import React, { useEffect } from 'react';
import Splash from './component/Splash';

const SplashView = ({ navigation }) => {
  useEffect(() => {
    setTimeout(function () {
      navigation.navigate('DashBoard')
    }, 3000);
  }, [])

  return (
    <Splash

    />

  )
}
export default SplashView;