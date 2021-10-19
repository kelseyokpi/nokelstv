import React, { Fragment } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import Video from 'react-native-video';
import { YELLOW_COLOR_CODE, COMMON_BUTTON_FONT_SIZE, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, COMMONBTNCOLOR } from '../../utils/constant';
const MoviePlayer = (props) => {
  const {
    uri
  } = props;
  const {

  } = styles;
  return (
    <Fragment>
      <Video
        // onEnd={props.onEnd}
        // onLoad={props.onLoad}
        // onLoadStart={props.onLoadStart}
        // onProgress={props.onProgress}
        // paused={props.paused}
        // ref={props.videoPlayer}
        // resizeMode={props.screenType}
        source={{ uri }}
        // source={require('../../../nokelstv.mp4')}
        // source={{ uri: props.MovieTrailor + props.MovieTrailorVideo }}
        // fullscreen={true}
        // volume={10}
        // resizeMode={'contain'}
        style={{
          height: '100%',
          width: '100%', 
        }}
      />
    </Fragment>
  );
}
// Button.Button = {
//   // buttonText: "Submit",
// };
const styles = StyleSheet.create({

})
export default MoviePlayer;