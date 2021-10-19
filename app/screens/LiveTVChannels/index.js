import React, { useState } from 'react';
import LiveTVChannels from './components/LiveTVChannels';
import FilterPopUp from './components/FilterPopUp';
import {View} from 'react-native'
const LiveTVChannelsView = (props) => {
    const [Dialogstatus, setDialogstatus] = useState(false)
    const [MOVIEDATA, setMOVIEDATA] =
        useState([
            {
                MovieTitle: '9XM',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'Music India',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'Zoom',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: "Mastii",
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: '9X jalwa',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'India TV',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'ABP News',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'NewsX',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'India News',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'India News UP',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'Gulistan News',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'News 24',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'News Nation',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'RSTV',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'Loksabha TV',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'India News MP',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'Wolverine',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'Fast And Furious',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'Wolverine',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },
            {
                MovieTitle: 'Fast And Furious',
                MoviePoster:
                    require
                        ('../../assets/header-logo-white.png')
            },

        ])
    function OpenPopup() {
        setDialogstatus(true)
    }
    function closePopup() {
        setDialogstatus(false)
    }
    function navtoback() {
        props.navigation.goBack(null)
}
    return (
        <View style={{ flex: 1 }}>
            <LiveTVChannels
            navtoback={navtoback}
                MOVIEDATA={MOVIEDATA}
                OpenPopup={() => OpenPopup()}
            />
            <View >
                <FilterPopUp
                    status={Dialogstatus}
                    closePopup={() => closePopup()}
                />
            </View>
        </View >
    )
}
export default LiveTVChannelsView;