import React, { useEffect, useState, useContext } from 'react';
import Searching from './components/Searching';
import { TouchableOpacity, Text, View } from 'react-native';
import {
    FONT_FAMILY_REGULAR, COMMONTHEMECOLOR,
    COMMON_BACKGROUND_COLOR, LIGHT_GREY_COLOR_CODE,
} from '../../utils/constant'
import { SearchDataContext } from '../../utils/UserContext';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import Loader from '../../utils/Loader';

var RNFS = require('react-native-fs');
const SearchingView = ({ navigation }) => {

    const [searchDataState, setSearchDataState] = useContext(SearchDataContext)
    const [SearchInput, setSearchInput] = useState('')
    const [Trending, setTrending] = useState([])
    const [Categories, setCategories] = useState('')
    const [BaseUrl, setBaseUrl] = useState('')
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        //setCategories(searchDataState)
    }, [])
    const [search, setSearch] = useState('')
    const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
    const [MainHeadingData, setMainHeadingData] =
        useState([
            { id: 1, name: 'Movies' },
            { id: 2, name: 'TV Shows' },
            // { id: 3, name: 'Live TV' },
            // { id: 4, name: 'Channel' },
            // { id: 5, name: 'People' },
            // { id: 6, name: 'News' }
        ], [])
    function _handleIsSelected(index, item) {
        setIsSelectedCatgory(index)
    }

    function _renderItems(item, index) {
        return (
            <TouchableOpacity
                onPress={() =>
                    _handleIsSelected(index, item)}
                style={{
                    flexDirection: 'row',
                    margin: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 35
                }}>
                <Text style={{
                    fontSize: 15,
                    fontFamily: FONT_FAMILY_REGULAR,
                    color: index === isSelectedCatgory ? COMMONTHEMECOLOR : LIGHT_GREY_COLOR_CODE,
                    borderBottomWidth: 1,
                    borderBottomEndRadius: 5,
                    borderColor: index === isSelectedCatgory ? COMMONTHEMECOLOR : COMMON_BACKGROUND_COLOR,
                }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    async function _handelFilter() {
        setVisible(true)
        if (SearchInput.length > 0) {
            var params = {
                searchdata: SearchInput
            }
            try {
                const response = await apiCall('POST', ENDPOINTS.DASHBOARD_SEARCHING, params)
                // console.log('Searching  ===== >>> response: ', response.data);
                if (response.status === 200) {
                    // alert(JSON.stringify(response))
                    // console.log('response.data.Trending: ', response.data.data.Trending);
                    setCategories(response.data.data.Trending);
                    setBaseUrl(response.data.base_url)
                    setVisible(false)
                }
                else  {
                    alert('Error')
                    setVisible(false)
                }
                // else if (response.status === 201) {
                //     alert('Error')
                //     setVisible(false)
                // }
                // else {
                //     navigation.navigate('SignIn')
                // }
            } catch (error) {
                console.log(error)
                setVisible(false)
            }
        } else {
        }
    }
    function onnavtomoviedetail(data) {
        // UserDatatype === 1 ?
            navigation.navigate("MovieDetail", { data: data })
            // : UserDatatype === 2 ?
                // navigation.navigate("TvShowDetails", { data: data })
                // : UserDatatype === 3 ?
                //     navigation.navigate("NewsDetails", { data: data })
                //     : null
    }
    function goBack() {
        navigation.goBack('')
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <Searching
                Trending={Trending}
                MainHeadingData={MainHeadingData}
                _renderItems={_renderItems}
                _handleIsSelected={_handleIsSelected}
                onnavtomoviedetail={(data) => onnavtomoviedetail(data)}
                Categories={Categories}
                _handelFilter={_handelFilter}
                setSearchInput={setSearchInput}
                SearchInput={SearchInput}
                BaseUrl={BaseUrl}
                goBack={goBack}
            />
        </View >
    )
}
export default SearchingView;