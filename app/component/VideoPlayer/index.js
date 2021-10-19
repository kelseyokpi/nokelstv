// React Native Video Library to Play Video in Android and IOS
// https://aboutreact.com/react-native-video/

// import React in our code
import React, { useState, useRef, useEffect } from "react";

// import all the components we are going to use
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

//Import React Native Video to play video
import Video from "react-native-video";

//Media Controls to control Play/Pause/Seek and full screen
import MediaControls, { PLAYER_STATES } from "react-native-media-controls";
import Orientation from "react-native-orientation";

const App = (props) => {
  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const { videoUrl, videoStyle, hasfull, setControl, handelHideBackButton } = props;
  let {customControl} = props;
 
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [screenType, setScreenType] = useState("content");

  const [localCustomControl,setLocalCustomControl] = useState(false)

  useEffect(() => {
    setLocalCustomControl(customControl)
    // Orientation.lockToPortrait();
    // return () => {
    //   Orientation.lockToPortrait();
    // };
   setTimeout(() => {
    setLocalCustomControl(false)
    }, 5000);
  }, [customControl]);
  const onSeek = (seek) => {
    //Handler for change in seekbar
    videoPlayer.current.seek(seek);
  };



  const onPaused = (playerState) => {
    //Handler for Video Pause
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    //Handler for Replay
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };

  const onProgress = (data) => {
    // Video Player will progress continue even if it ends
    if (!isLoading && playerState !== PLAYER_STATES.ENDED && setControl) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = (data) => setIsLoading(true);

  const onEnd = () => {
    setPlayerState(PLAYER_STATES.ENDED)
    props.onEndVideo(PLAYER_STATES.ENDED);
  };

  const onError = () => alert("Oh! ", error);

  const exitFullScreen = () => {
    alert("Exit full screen");
  };

  const enterFullScreen = () => {};

  const onFullScreen = () => {
    Orientation.getOrientation((err, orientation) => {
      if (orientation == "LANDSCAPE") {
        Orientation.lockToPortrait();
      } else {
        Orientation.lockToLandscape();
      }
    });
    setIsFullScreen(isFullScreen);
    if (screenType == "content") setScreenType("cover");
    else setScreenType("content");
  };

  const renderToolbar = () => (
    <View style={{  height: 50 }}>
      <Text style={styles.toolbar}> toolbar </Text>
    </View>
  );
  function movieBackward() {
    videoPlayer.current.seek(currentTime - 15);
    setCurrentTime(currentTime - 15);
    // const timeing = currentTime - 15
    // setOrientation(currentTime - 15)
  }
  function movieForward() {
    videoPlayer.current.seek(currentTime + 15);
    setCurrentTime(currentTime + 15);
    // setOrientation(currentTime + 15)
  }
  const onSeeking = (currentTime) => setCurrentTime(currentTime);

  const changeLocalControl = () => {
    setLocalCustomControl(!localCustomControl)
    handelHideBackButton(!localCustomControl)
  }

  return (
    <View 
      style={{
        flex: 1,
      }}
    >
      { localCustomControl ? 
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          position: "absolute",
          top: "50%",
          right: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: 70,
          }}
          onPress={() => movieBackward()}
        >
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../assets/left.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: 70,
          }}
          onPress={() => movieForward()}
        >
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../assets/right.png")}
          />
        </TouchableOpacity>
      </View>
      : null
}
      <Video
        //controls={setControl}
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        paused={paused}
        ref={videoPlayer}
        resizeMode={"contain"}
        onFullScreen={isFullScreen}
        rate={1.0}
        source={
          videoUrl
            ? videoUrl
            : 
            {
                uri:
                  // videoUrl?videoUrl:
                  "https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4",
              }
        }
        style={[styles.mediaPlayer, videoStyle]}
        volume={10}
      />
    
      {
      setControl?
      <TouchableOpacity onPress={()=> changeLocalControl()} style={{flex:1}}>
      <MediaControls
        duration={duration}
        isLoading={isLoading}
        mainColor="#333"
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
        toolbar={renderToolbar()}
      />
      </TouchableOpacity>
      :null
    }
    </View>
  );
};
App.defaultProps = {
  hasfull: false,
  videoStyle: {},
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // width:150,
    // height:150,
    backgroundColor: "black",
    // justifyContent: "center",
  },
});
