import React from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';
import {COMMON_BACKGROUND_COLOR} from '../../../utils/constant';
const Splash =()=>{
    return(
        <View style={styles.container}>
             <Image
              source={
                  require('../../../assets/login-logo.png')
              }
             />
        </View>
    )
} 
export default Splash;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COMMON_BACKGROUND_COLOR
    }
}
)