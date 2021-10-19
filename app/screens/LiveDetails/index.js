import React, { useState } from 'react';
import LiveDetails from './components/Livedetails';
const LivedetailsView = ({ navigation }) => {
    const [MainHeadingData, setMainHeadingData] =
        useState([
            {
                name: 'Corona 100',
                time: '  07:57 pm - 8:57 pm'
            },
            {
                name: ' Haqiqat kya Hai? / Super 100',
                time: '  07:57 pm - 8:57 pm'
            },
            {
                name: 'Coqiqat kya Hai? / Super 100',
                time: '  07:57 pm - 8:57 pm'
            },
            {
                name: ' Haqiqat kya Hai? / Super 100',
                time: '  07:57 pm - 8:57 pm'
            },
            {
                name: ' Haqiqat kya Hai? / Super 100',
                time: '  07:57 pm - 8:57 pm'
            }
        ])
    const [MOVIEDATA, setMOVIEDATA] =
        useState([
            {
                MovieTitle: 'India-Tv',
                MoviePoster:
                    require('../../assets/newslogo01.png'),
            },
            {
                MovieTitle: 'Aaj Tak',
                MoviePoster:
                    require('../../assets/newslogo02.jpeg'),
            },
            {
                MovieTitle: 'ABP',
                MoviePoster:
                    require('../../assets/newslogo03.png'),
            },
            {
                MovieTitle: 'New 24',
                MoviePoster:
                    require('../../assets/newslogo04.jpeg'),
            },
            {
                MovieTitle: 'Sony-Max',
                MoviePoster:
                    require('../../assets/newslogo05.png'),
            },
            {
                MovieTitle: 'Sony-Sab',
                MoviePoster:
                    require('../../assets/newslogo05.png'),
            },
            {
                MovieTitle: 'ABP',
                MoviePoster:
                    require('../../assets/newslogo05.png'),
            },
            {
                MovieTitle: 'India-Tv',
                MoviePoster:
                    require('../../assets/newslogo05.png'),
            },
        ])
    return (
        <LiveDetails
            MOVIEDATA={MOVIEDATA}
            MainHeadingData={MainHeadingData}
        />
    )
}

export default LivedetailsView;