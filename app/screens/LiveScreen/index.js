import React, { useState } from 'react';
import Livescreen from './component/Livescreen'
const LivescreenView = ({ navigation }) => {
    const [MOVIEDATA, setMOVIEDATA] =
        useState([
            {
                MovieTitle: '07:55 PM-11:04 PM',
                MoviePoster:
                    require
                        ('../../assets/wolverine_ver5_xlg.jpg')
            },
            {
                MovieTitle: '12:00 AM-01:13 AM',
                MoviePoster:
                    require
                        ('../../assets/Screen-Shot-2019-11-10-at-9.54.13-AM.png')
            },
            {
                MovieTitle: '12:00 AM-01:13 AM',
                MoviePoster:
                    require
                        ('../../assets/world_war_z_ver2_xlg.jpg')
            },
            {
                MovieTitle: '12:00 AM-01:13 AM',
                MoviePoster:
                    require
                        ('../../assets/Expendables-3-movie-poster.png')
            },
            {
                MovieTitle: '12:00 AM-01:13 AM',
                MoviePoster:
                    require
                        ('../../assets/wolverine_ver5_xlg.jpg')
            },
            {
                MovieTitle: '12:00 AM-01:13 AM',
                MoviePoster:
                    require
                        ('../../assets/header-banner-bg-l2.png')
            },
        ])
    function navToLiveDetails() {
        navigation.navigate('LiveDetails')
    }
    function navtoback() {
        navigation.goBack(null)
    }
    return (
        <Livescreen
            MOVIEDATA={MOVIEDATA}
            navtoback={navtoback}
            navToLiveDetails={() => navToLiveDetails()}
        />
    )
}
export default LivescreenView;
