import React, { useState, useEffect } from 'react';
import Newsdetails from './components/Newsdetails';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
const NewsdetailsView = ({ route, navigation }) => {
    const { data } = route.params;
    const [NewsDetailData, setNewsDetailData] = useState([])
    const [url, setUrl] = useState('')
    useEffect(() => {
        GetNewsDetails();
    }, [])
    const GetNewsDetails = async () => {
        const params = {
            "news_id": data.id
        }
        try {
            const response = await apiCall
                ('POST', ENDPOINTS.NEWSDETAIL, params);
            if (response.status === 200) {
                // alert(JSON.stringify(response.data.data))
                setNewsDetailData(response.data.data)
                setUrl(response.data.base_url)
            }
            else {
            }
            // else if (response.status === 201) {
            //     //alert("in try IF {Dashboard}")
            // }
            // else {
            //     navigation.navigate('SignIn')
            // }
        }
        catch (e) {
        }
    }
    function goback() {
        navigation.goBack(null)
    }
    return (
        <Newsdetails
            NewsDetailData={NewsDetailData}
            url={url}
            goback={goback}
        />
    )
}
export default NewsdetailsView;