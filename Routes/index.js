import React, { useEffect, useContext, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  Modal,
  Button,
  Linking,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContent,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-community/async-storage";
import { UserContext } from "../app/utils/UserContext";
import { apiCall, setDefaultHeader } from "../app/utils/httpClient";
import ENDPOINTS from "../app/utils/apiEndPoints";
import {
  COMMON_BACKGROUND_COLOR,
  COMMONTHEMECOLOR,
  FONT_FAMILY_BOLD,
} from "../app/utils/constant";
// import DeviceInfo from 'react-native-device-info';

import WelcomeSlider from "../app/screens/WelcomeSlider";
import SignIn from "../app/screens/SignIn";
import SignUp from "../app/screens/SignUp";
import SignUpOTP from "../app/screens/SignUpOTP";
import Forgotpassword from "../app/screens/ForgotPassword";
import ForgotpasswordField from "../app/screens/ForgotPasswordField";
import ChoosePlan from "../app/screens/ChoosePlan";
import Subscription from "../app/screens/Subscription";
import DashBoard from "../app/screens/DashBoard";
import MovieDetail from "../app/screens/MovieDetail";
import Profile from "../app/screens/Profile";
import DownLoad from "../app/screens/DownLoad";
import ChatScreen from "../app/screens/ChatScreen";
import TvShowDetails from "../app/screens/TvShowDetails";
import LiveTVChannels from "../app/screens/LiveTVChannels";
import NewsScreen from "../app/screens/NewsScreen";
import LiveScreen from "../app/screens/LiveScreen";
import LiveDetails from "../app/screens/LiveDetails";
import NewsDetails from "../app/screens/NewsDetails";
import WatchList from "../app/screens/WatchList";
import Logout from "../app/utils/logout";
import Splash from "../app/screens/Splash";
import MovieList from "../app/screens/MovieList";
import TvShowList from "../app/screens/TvShowList";
import NewsList from "../app/screens/NewsList";
import FavouriteScreen from "../app/screens/FavouriteScreen";
import SearchingScreen from "../app/screens/Searching";
import SeasonCategoryScreen from "../app/screens/SeasonCategory";
import EpisodesDetailScreen from "../app/screens/EpisodesDetails";
import HelpScreen from "../app/screens/Help";
import PrivacyPolicyScreen from "../app/screens/PrivacyPolicy";
import { FONT_FAMILY_REGULAR } from "../app/utils/constant";
import { AuthContext } from "../app/component/AuthContext";
// import MyTabBar from './MyTabBar';
const Stack = createStackNavigator();
const Auth = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeS = createStackNavigator();
const logoutS = createStackNavigator();

function CustomDrawerContent(props) {
  const { signOut } = React.useContext(AuthContext);
  const [userData, setUserData] = useContext(UserContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 2,
            backgroundColor: "#11bfbe",
            marginTop: Platform.OS === "ios" ? -52 : -30,
          }}
        >
          <Image
            source={{
              uri: userData.profile,
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              // marginLeft: 30,
              marginLeft: Platform.OS === "ios" ? 20 : 30,
              marginTop: Platform.OS === "ios" ? "12%" : 30,
              marginBottom: Platform.OS === "ios" ? 5 : 0,
            }}
          />
          {userData.email === "" ? null : (
            <Text
              style={{
                color: "#ffffff",
                fontSize: 20,
                fontFamily: FONT_FAMILY_BOLD,
                marginLeft: 25,
                marginTop: 5,
                marginBottom: Platform.OS === "ios" ? 7 : 0,
                textTransform: "capitalize"
              }}
            >
              {userData.first_name}
            </Text>
          )}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontFamily: FONT_FAMILY_REGULAR,
                marginLeft: 25,
                marginBottom: 10,
              }}
            >
              {userData.email}
            </Text>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              marginLeft: "10%",
              marginTop: "5%",
              marginBottom: "2%",
            }}
          >
            <Text
              style={{
                color: "#919191",
                fontFamily: FONT_FAMILY_REGULAR,
                fontSize: 15,
              }}
            >
              NAVIGATIONS
            </Text>
          </View>
          <DrawerItemList {...props} />
        </View>
        {userData.email !== "" && userData.email !== undefined ?
          <TouchableOpacity
            onPress={() => signOut()}
            // onPress={() => props.navigation.navigate('LogoutStack')}
            style={{
              backgroundColor: "#f7f7f7",
              marginTop: Platform.OS === "ios" ? "15%" : 0,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  marginRight: "10%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Image source={require("../app/assets/menu-logout-icon.png")} />
              </View>
              <Text
                style={{
                  fontFamily: FONT_FAMILY_REGULAR,
                  fontSize: 17,
                }}
              >
                LOGOUT
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                // alignItems: "center"
              }}
            >
              <Image source={require("../app/assets/menu-logout-arrow.png")} />
            </View>
          </TouchableOpacity>
          :




          <TouchableOpacity
            // onPress={() => signInFunction()}
            onPress={() => props.navigation.navigate('SignIn')}
            style={{
              // backgroundColor: "red",
              backgroundColor: "#f7f7f7",
              marginTop: Platform.OS === "ios" ? "15%" : 10,
              width: Platform.OS === 'ios' ? '60%' : "60%",
              flexDirection: "row",
              justifyContent: "space-evenly", alignItems: 'center'
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* <View
              style={{
                marginRight: "10%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Image style={{width:38,height:38}} source={require("../app/assets/log-in-button.png")} />
            </View> */}
              <Text
                style={{
                  fontFamily: FONT_FAMILY_REGULAR,
                  fontSize: 17,
                }}
              >
                LOG IN
            </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                // alignItems: "center"
              }}
            >
              <Image source={require("../app/assets/menu-logout-arrow.png")} />
            </View>
          </TouchableOpacity>
        }
      </View>
    </DrawerContentScrollView>
  );
}
function DrawerNavigation({ navigation }) {
  return (
    <Drawer.Navigator
      activeTintColor={false}
      drawerStyle={{
        backgroundColor: "#f7f7f7",
        width: "70%",
        color: "#484848",
      }}
      drawerContentOptions={{ activeTint: "disable" }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    // drawero
    >
      <Drawer.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          title: "DashBoard",
          drawerIcon: () => (
            <Image source={require("../app/assets/menu-home-icon.png")} />
          ),
        }}
      />
      <Drawer.Screen
        name="MOVIES"
        component={MovieList}
        options={{
          title: "MOVIES",
          drawerIcon: () => (
            <Image source={require("../app/assets/menu-liveshow-icon.png")} />
          ),
        }}
      />
      {/* <Drawer.Screen name="SERIES" component={ChatScreen}
                options={{
                    title: 'SERIES',
                    drawerIcon: () => (
                        <Image
                            source={require('../app/assets/menu-series-icon.png')}
                        />
                    ),
                }}
            /> */}
      {/* <Drawer.Screen name="PEOPLE" component={DownLoad}
                options={{
                    title: 'PEOPLE',
                    drawerIcon: () => (
                        <Image
                            source={require('../app/assets/menu-people-icon.png')}
                        />
                    ),
                }}
            /> */}
      {/* <Drawer.Screen name="NEWS" component={NewsScreen}
                options={{
                    title: 'NEWS',
                    drawerIcon: () => (
                        <Image
                            source={require('../app/assets/menu-news-icon.png')}
                        />
                    ),
                }}
            /> */}
      <Drawer.Screen
        name="FAVOURITE"
        component={FavouriteScreen}
        options={{
          title: "FAVOURITES",
          drawerIcon: () => (
            <Image
              style={{ height: 16, width: 16 }}
              source={require("../app/assets/love.png")}
            />
          ),
        }}
      />
      {/* <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen}
                options={{
                    title: 'Privacy Policy',
                    drawerIcon: () => (
                        <Image
                            style={{ height: 20, width: 20 }}
                            source={require('../app/assets/compliant.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="Help" component={HelpScreen}
                options={{
                    title: 'Help',
                    drawerIcon: () => (
                        <Image
                            style={{ height: 18, width: 18 }}
                            source={require('../app/assets/question.png')}
                        />
                    ),
                }}
            /> */}
    </Drawer.Navigator>
  );
}

// function TabNavigation() {
//     return (
//         <Tab.Navigator
//             initialRouteName='DashBoard'
//             lazy={true}
//             tabBar={props => <MyTabBar {...props} />}>
//             <Tab.Screen name="ChatScreen" component={SignIn} />
//             <Tab.Screen name="WatchList" component={SignIn} />
//             <Tab.Screen name="DashBoard" component={DashBoard} />
//             <Tab.Screen name="DownLoad" component={SignIn} />
//             <Tab.Screen name="LiveScreen" component={SignIn} />
//         </Tab.Navigator>
//     )
// }
// function HomeTabNavigation() {
// return (
// <Tab.Navigator
//     initialRouteName='DashBoard'
//     lazy={true}
//     tabBar={props => <MyTabBar {...props} />}>
//     <Tab.Screen name="ChatScreen" component={ChatScreen} />
//     <Tab.Screen name="WatchList" component={WatchList} />
//     <Tab.Screen name="DashBoard" component={DrawerNavigation} />
//     <Tab.Screen name="DownLoad" component={DownLoad} />
//     <Tab.Screen name="LiveScreen" component={LiveScreen} />
// </Tab.Navigator>
// )
// }
function HomeScreen() {
  return (
    <HomeS.Navigator screenOptions={{ headerShown: false }}>
      <HomeS.Screen name="DashBoard" component={DrawerNavigation} />
      <HomeS.Screen name="MovieDetail" component={MovieDetail} />
      <HomeS.Screen name="Profile" component={Profile} />
      <HomeS.Screen name="LiveTVChannels" component={LiveTVChannels} />
      <HomeS.Screen name="NewsScreen" component={NewsScreen} />
      <HomeS.Screen name="TvShowDetails" component={TvShowDetails} />
      <HomeS.Screen name="LiveDetails" component={LiveDetails} />
      <HomeS.Screen name="NewsDetails" component={NewsDetails} />
      <HomeS.Screen name="LogoutStack" component={LogoutStack} />
      <HomeS.Screen name="MovieList" component={MovieList} />
      <HomeS.Screen name="TvShowList" component={TvShowList} />
      <HomeS.Screen name="NewsList" component={NewsList} />
      <HomeS.Screen name="Subscription" component={Subscription} />
      <HomeS.Screen name="ChoosePlan" component={ChoosePlan} />
      <HomeS.Screen name="FavouriteScreen" component={FavouriteScreen} />
      <HomeS.Screen name="Searching" component={SearchingScreen} />
      <HomeS.Screen name="SeasonCategory" component={SeasonCategoryScreen} />
      <HomeS.Screen name="EpisodesDetails" component={EpisodesDetailScreen} />
      <HomeS.Screen name="Help" component={HelpScreen} />
      <HomeS.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <HomeS.Screen name="SignIn" component={SignIn} />
    </HomeS.Navigator>
  );
}
function SignInScreen() {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="WelcomeSlider" component={WelcomeSlider} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUpOTP" component={SignUpOTP} />
      <Auth.Screen name="DashBoard" component={DrawerNavigation} />
      {/* <Auth.Screen name="DashBoard" component={TabNavigation} /> */}
      <Auth.Screen name="MovieDetail" component={MovieDetail} />
      <Auth.Screen name="Profile" component={Profile} />
      <Auth.Screen name="LiveTVChannels" component={LiveTVChannels} />
      <Auth.Screen name="NewsScreen" component={NewsScreen} />
      <Auth.Screen name="TvShowDetails" component={TvShowDetails} />
      <Auth.Screen name="LiveDetails" component={LiveDetails} />
      <Auth.Screen name="NewsDetails" component={NewsDetails} />
      <Auth.Screen name="ForgotPassword" component={Forgotpassword} />
      <Auth.Screen name="ForgotPasswordField" component={ForgotpasswordField} />
      <Auth.Screen name="MovieList" component={MovieList} />
      <Auth.Screen name="Home" component={HomeScreen} />
      <Auth.Screen name="TvShowList" component={TvShowList} />
      <Auth.Screen name="NewsList" component={NewsList} />
      <Auth.Screen name="Subscription" component={Subscription} />
      <Auth.Screen name="ChoosePlan" component={ChoosePlan} />
      <Auth.Screen name="SeasonCategory" component={SeasonCategoryScreen} />
      <Auth.Screen name="Help" component={HelpScreen} />
      <Auth.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Auth.Screen name="EpisodesDetails" component={EpisodesDetailScreen} />
      <Auth.Screen name="Searching" component={SearchingScreen} />
    </Auth.Navigator>
  );
}
function LogoutStack() {
  return (
    <logoutS.Navigator screenOptions={{ headerShown: false }}>
      <logoutS.Screen name="Logout" component={Logout} />
      {/* <logoutS.Screen name="App" component={App} /> */}
    </logoutS.Navigator>
  );
}
function AuthLoading({ navigation }) {
  const [showVersionModal, setShowVersionModal] = useState(false);
  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );
  const [userData, setUserData] = useContext(UserContext);
  const authContext = React.useMemo(
    () => ({
      signIn: async (token) => {
        console.log("token: ", token);
        let userToken = token;
        try {
          await setDefaultHeader("token", userToken);
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGIN", token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("localUserData");
          await AsyncStorage.removeItem("userToken");
          await setUserData("");
          getToken();
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => { },
    }),
    []
  );
  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
    getToken();
  }, []);
  async function getToken() {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      if (userToken === null) {
        const { data } = await apiCall("post", ENDPOINTS.GENERATE_TOKEN);
        if (data.status === 200) {
          await setDefaultHeader("token", data.token);
        } else {
          console.log("error");
        }
      } else {
        await setDefaultHeader("token", userToken);
        // var dev = DeviceInfo.getVersion();
        // console.log("DeviceInfo.getVersion()",dev);
        const { data } = await apiCall("post", ENDPOINTS.GET_USER_PROFILE);
        if (data.status === 200) {
          data?.data?.version_update == 1
            ?
            setShowVersionModal(true)
            : setUserData(data.data);
        } else if (data.status === 201) {
          console.log("data.message: ", data.message);
        } else if (data.status === 401) {
          console.log("data.message: ", data.message);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  if (loginState.isLoading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={false} translucent={false} />
        <Image source={require("../app/assets/login-logo.png")} />
      </View>
    );
  }
  return (
    <>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {loginState.userToken === null ? (
            <Stack.Screen name="SignIn" component={SignInScreen} />
          ) : (
              <Stack.Screen name="Home" component={HomeScreen} />
            )}
        </Stack.Navigator>
      </AuthContext.Provider>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showVersionModal}
        onRequestClose={() => {
          setShowVersionModal(false);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 220,
              width: "80%",
              backgroundColor: "#ffffff",
              borderRadius: 5,
            }}
          >
            <View
              style={{
                height: 170,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 21,
                  textAlign: "center",
                  fontFamily: FONT_FAMILY_BOLD,
                }}
              >
                New version is available, Please update
              </Text>
            </View>
            <View style={{ height: 50, backgroundColor: COMMONTHEMECOLOR }}>
              <Button
                onPress={() => {
                  Platform.OS === "ios"
                    ? Linking.openURL(
                      "itms-apps://itunes.apple.com/us/app/apple-store/id1563550028?mt=8"
                    )
                    : Linking.openURL("'market://details?id=com.nokelstv'")
                  // setShowVersionModal(false);
                }
                }
                title="Update App"
                color={COMMONTHEMECOLOR}
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
const linking = {
  prefixes: ['https://nokelsTv.com', 'nokelsTv://'],

  //   config: {
  //     screens: {
  //       Profile: 'profile',
  //     }
  //   },
};
function routes({ }) {

  return (
    // <NavigationContainer >
    //     <App />
    // </NavigationContainer>
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthLoading" component={AuthLoading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COMMON_BACKGROUND_COLOR,
  },
});
export default routes;
