import React, { useState, useEffect, useContext, useRef } from 'react';
import SeasonCategory from './components/SeasonCategory';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import Error from '../../component/modal/error';
import Success from '../../component/modal/success';
import { View, Text, } from 'react-native';
import Loader from '../../utils/Loader';

const SeasonCategoryView = ({ route, navigation }) => {
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [url, setUrl] = useState('')
    const [dataget, setDataget] = useState([])
    const [SessionEpisode, setSessionEpisode] = useState('')
    const [visible, setVisible] = useState(false)
    const { item } = route.params;

    useEffect(() => {
        handleEpisodelist()
    }, [])

    function navtoback() {
        navigation.goBack(null)
    }
    const handleEpisodelist = async () => {
        setVisible(true)
        const params = {
            serial_id: item.serial_id,
            season_id: item.id,
        }
        try {
            const response = await apiCall("POST", ENDPOINTS.SEASON_SERIAL_EPISODE, params);
            console.log("response", response.data)
            if (response.status === 200) {
                setUrl(response.data.base_url)
                setDataget(response.data.data)
                setVisible(false)
            }
            else  {
                setVisible(false)
                setErrorMessage("episode not found")
                setVisibleErr(true)
            }
            // else if (response.status === 201) {
            //     setVisible(false)
            //     setErrorMessage("episode not found")
            //     setVisibleErr(true)
            // }
            // else {
            //     navigation.navigate('SignIn')
            // }
        }
        catch (error) {
            alert("Cant connect to Server")
        }
    }
    function navtoEpisodeDetails(item) {
        navigation.navigate('EpisodesDetails', { item: item, Url: url })
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <SeasonCategory
                navtoEpisodeDetails={navtoEpisodeDetails}
                navtoback={navtoback}
                SessionEpisode={SessionEpisode}
                handleEpisodelist={handleEpisodelist}
                url={url}
                dataget={dataget}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => OnSuccessModal()}
            />
        </View>
    )
}
export default SeasonCategoryView;