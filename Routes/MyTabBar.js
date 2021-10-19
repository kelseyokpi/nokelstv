import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined
              ? options.title : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, backgroundColor: "#1a1a1a", justifyContent: 'center', alignItems: 'center' }}
          >
            {
              // label === 'ChatScreen' ?
              //   <Image source={require('../app/assets/footer-chat-icon.png')} />
              //   : label === 'WatchList' ?
              //     <Image source={require('../app/assets/footer-video-icon.png')} />
                  // :
                   label === 'DashBoard' ?
                    <Image source={require('../app/assets/footer-home-icon.png')} />
                    // : label === 'DownLoad' ?
                    //   <Image source={require('../app/assets/footer-download-icon.png')} />
                    //   : label === 'LiveScreen' ?
                    //     <Image source={require('../app/assets/footer-menu-icon.png')} />
                        : null
            }
            {/* {
              label === 'ChatScreen' ?
                <Image source={require('../app/assets/footer-chat-icon.png')} />
                : label === 'WatchList' ?
                  <Image source={require('../app/assets/footer-video-icon.png')} />
                  : label === 'DashBoard' ?
                    <Image source={require('../app/assets/footer-home-icon.png')} />
                    : label === 'DownLoad' ?
                      <Image source={require('../app/assets/footer-download-icon.png')} />
                      : label === 'LiveScreen' ?
                        <Image source={require('../app/assets/footer-menu-icon.png')} />
                        : null
            } */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default MyTabBar;