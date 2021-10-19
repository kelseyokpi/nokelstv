import React, { useState } from 'react';
import NewsScreen from './components/NewsScreen';
const NewsscreenView = ({navigation}) => {
    const [MainHeadingData, setMainHeadingData] =
        useState([
            // {
            //     txtdata: "How Coronavirus is going to impact you next trip.",
            //     mnimg:
            //         require
            //             ('../../assets/newscorona.jpeg'),
            // },
            {
                txtdata: "New MacBook is here",
                img:
                    require
                        ('../../assets/iphone.jpeg')
            },
            {
                txtdata: "How FIAT made the history",
                img:
                    require
                        ('../../assets/fiatpunto.jpeg')
            }
        ])
    function navtonewsdetail(){
        navigation.navigate("NewsDetails")
    }
    function navtoback() {
        navigation.goBack(null)
    }
    return (
        <NewsScreen
            navtoback={navtoback}
            navtonewsdetail={navtonewsdetail}
            MainHeadingData={MainHeadingData}
        />
    )
}
export default NewsscreenView;