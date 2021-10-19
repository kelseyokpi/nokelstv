import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
const Loader = (props) => {
  return (
    <View style={{
      // backgroundColor: "#000",
      position: "absolute",
      zIndex: 1,
      justifyContent: "center",
      alignSelf: "center",
      width: '100%',
      opacity: 1,
      height: "100%"
    }}>
      <LottieView
        visible={true}
        style={{
          backgroundColor: "transparent",
          alignSelf: "center",
          width: 150,
        }}
        source={require('../assets/loader.json')}
        autoPlay loop />
    </View>
  );
}

export default Loader;