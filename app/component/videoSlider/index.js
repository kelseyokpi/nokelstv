import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Image,
  Animated
} from 'react-native';
import Video from 'react-native-video';
// import LottieView from 'lottie-react-native';
const { height, width } = Dimensions.get('window');
const cellHeight = height * 0.6;
const cellWidth = width;
const viewabilityConfig = {
  itemVisiblePercentThreshold: 80,
};
class Item extends React.PureComponent {
  state = {
    paused: false,
  }
  async play() {
    this.setState({
      paused: false
    })

  }
  pause() {
    this.setState({
      paused: true
    })
  }

  render(props) {
    const { id, banner_path_name, DashboardUrl, banner_image, video, BannerBaseUrl, VideoBannerUrl, isMuted, videoArray } = this.props;
    const uri = banner_path_name;
    return (
      <View style={styles.cell}>

        <Image
          // source={require('../../assets/header-logo.png')}
          source={{
            uri: DashboardUrl + banner_image,
            cache: 'force-cache',
          }}
          resizeMethod={"auto"}
          resizeMode={"contain"}
          style={[styles.full, styles.poster]}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
        />
        <Video
          ref={ref => {
            this.video = ref;
          }}
          source={{ uri }}
          poster={DashboardUrl + banner_image}
          shouldPlay={false}
          repeat={videoArray.length == 1 ? true : false}
          paused={this.state.paused}
          // isMuted={isMuted}
          muted={isMuted}
          isLooping
          resizeMode="cover"
          posterResizeMode={'cover'}
          style={styles.full}
        />
        <View style={styles.overlay}>

        </View>
      </View>
    );
  }
}
export default class App extends React.PureComponent {
  state = {
    items: [],
    currentIndex: 0
  };
  constructor(props) {
    super(props);
    this.cellRefs = {};
    this.scrollX = new Animated.Value(0)

  }
  componentDidMount() {
    // console.log('this.scrollX ', this.scrollX)
    // this.interval = setInterval(() => {
    //   this.onPressNext()
    // }, 10000);

  }
  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }
  _onViewableItemsChanged = props => {
    const changed = props.changed;
    this.setState({
      currentIndex: props.changed.length > 0 && props.changed[0].index
    })
    changed.forEach(item => {
      const cell = this.cellRefs[parseInt(item.key) + 1];
      if (cell) {

        if (item.isViewable) {
          cell.play(cell);
        } else {
          cell.pause(cell);
        }
      }
    });
  };
  _renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{ width: cellWidth, height: 250 }}>
        <Item
          ref={ref => {
            this.cellRefs[item.id] = ref;
          }}
          {...item}
          isMuted={this.props.isMuted}
          videoArray={this.props.videoArray}
        />
      </View>
    );
  };
  onPressNext = () => {
    this.flatListRef.scrollToIndex({ animated: true, index: this.state.currentIndex + 1 });
  };
  render(props) {
    const { items } = this.state;
    const { videoArray } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          //  ref={(ref) => { this.flatListRef = ref; }}
          data={videoArray}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          onViewableItemsChanged={this._onViewableItemsChanged}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          // windowSize={5}
          removeClippedSubviews={true}
          getItemLayout={(_data, index) => ({
            length: cellHeight,
            offset: cellHeight * index,
            index,
          })}
          viewabilityConfig={viewabilityConfig}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          pagingEnabled
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: this.scrollX
                }
              }
            }
          ], { useNativeDriver: false })}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* <Text style={{fontSize:20}}>
          {props.BaseUrl.dashboard_banner_url}
        </Text> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cell: {
    width: cellWidth,
    height: 250,
    backgroundColor: '#000',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 40,
  },
  full: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1
  },
  poster: {
    resizeMode: 'cover',
  },
  overlayText: {
    color: '#fff',
  },
  header: {
    flex: 1,
    flexDirection: "row",
    position: 'absolute',
    zIndex: 1,
    left: 0,
    // backgroundColor:"red",
    // height: 40,
    width: "125%"
  },
  logoimg: {
    marginTop: 25,
    marginLeft: 10,
  },
  hdrscdvw: {
    marginTop: 25,
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",

  },
  hdrtcimg: {
    marginRight: "5%",
  },
  // height: 50,
});
