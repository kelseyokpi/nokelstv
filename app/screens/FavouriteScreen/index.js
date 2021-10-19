import React, { useState, useCallback, useEffect } from 'react';
import FavouriteScreen from './components/FavouriteScreen';
import { useFocusEffect } from '@react-navigation/native';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import { View } from 'react-native';
import Loader from '../../utils/Loader';
import _ from 'lodash'
const FavouriteScreenView = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [profileLoader, setProfileLoader] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');
    const [LikedMovies, setLikedMovies] = useState('');
    const [MovieUrl, setMovieUrl] = useState('');
    const [itemsDataArray, setItemsDataArray] = useState('');
    const [searchInput, setSearchInput] = useState('');

    // const [visibleErr, setVisibleErr] = useState(false);
    useFocusEffect(useCallback(() => {
        DataGetFunction()
        return () => { DataGetFunction() }
    }, [])
    );

    const onLoadStart = () => {
        setProfileLoader(true)
    }

    const onLoadEnd = () => {
        setProfileLoader(false)
    }

    const DataGetFunction = async () => {
        setRefreshing(true)
        try {
            setVisible(true)
            const { data } = await apiCall('POST', ENDPOINTS.GET_WATCH_LIKED_MOVIE);
            if (data.status === 200) {
                setVisible(false)
                setRefreshing(false)
                setMovieUrl(data.base_url.movie_poster_url)
                setLikedMovies(data.data)
                setItemsDataArray(data)
            }
            else {
                // setVisibleErr(true)
                // setErrorMessage(response.data.message)
                setRefreshing(false)
                setVisible(false)
            }
            // else if (data.status === 201) {
            //     // setVisibleErr(true)
            //     // setErrorMessage(response.data.message)
            //     setRefreshing(false)
            //     setVisible(false)
            // }
            // else {
            //     navigation.navigate('SignIn')
            // }
        }
        catch (e) {
            setRefreshing(false)
            setVisible(false)
            // setVisibleErr(true)
            // setErrorMessage(e.toString())
        }
    }
    function navtoback() {
        navigation.goBack(null)
    }
    const onRefresh = () => {
        setRefreshing(true)
        DataGetFunction()
    }
    function SearchMovies(searchKey) {
        const lowerCased = searchKey.toLowerCase();
        const searchArray = [...itemsDataArray.data]
        const list = _.filter(searchArray, (item) => {
            return item.movie_name.toLowerCase().match(lowerCased)
        })
        setLikedMovies(list)
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <FavouriteScreen
                navtoback={navtoback}
                LikedMovies={LikedMovies}
                refreshing={refreshing}
                onRefresh={onRefresh}
                MovieUrl={MovieUrl}
                onLoadEnd={onLoadEnd}
                onLoadStart={onLoadStart}
                profileLoader={profileLoader}
                SearchMovies={SearchMovies}
                setSearchInput={setSearchInput}
                searchInput={searchInput}
            />
            {/* <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            /> */}
        </View>
    )
}
export default FavouriteScreenView;