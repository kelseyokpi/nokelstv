import React, { useState } from 'react';
import WatchList from './components/WatchList'
const WatchListView = ({ navigation }) => {
    const [MOVIEDATA, setMOVIEDATA] =
        useState([
            {
                MovieTitle: '9XM',
                MoviePoster:
                    require
                        ('../../assets/amar.jpeg')
            },
            {
                MovieTitle: 'Music India',
                MoviePoster:
                    require
                        ('../../assets/fiatpunto.jpeg')
            },
            {
                MovieTitle: 'Zoom',
                MoviePoster:
                    require
                        ('../../assets/marvel.jpeg')
            },
            {
                MovieTitle: "Mastii",
                MoviePoster:
                    require
                        ('../../assets/iron.jpeg')
            },
            {
                MovieTitle: '9X jalwa',
                MoviePoster:
                    require
                        ('../../assets/rag.jpeg')
            },
            {
                MovieTitle: '9XM',
                MoviePoster:
                    require
                        ('../../assets/amar.jpeg')
            },
            {
                MovieTitle: 'Music India',
                MoviePoster:
                    require
                        ('../../assets/fiatpunto.jpeg')
            },
            {
                MovieTitle: "Mastii",
                MoviePoster:
                    require
                        ('../../assets/iron.jpeg')
            },



        ])
    function navtoback() {
        navigation.goBack(null)
    }

    return (
        <WatchList
            navtoback={navtoback}
            MOVIEDATA={MOVIEDATA}
        />
    )
}
export default WatchListView;