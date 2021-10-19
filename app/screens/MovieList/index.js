import React, { useState, useEffect, useContext } from 'react';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
// import { UserContext } from '../../utils/UserContext';
import MovieList from './components/MovieList';
import FilterPopUp from './components/FilterPopUp';
import { View } from 'react-native'
import Loader from '../../utils/Loader';
const MovieListView = (props) => {
    const [Dialogstatus, setDialogstatus] = useState(false)
    const [MOVIEDATA, setMOVIEDATA] = useState([])
    const [baseURL, setBaseURL] = useState("")
    // const [categoryID, setCategoryID] = useState("")


    // api - /api/movie/MoviesListbycategory
    // category_id: "13"



    const [visible, setVisible] = useState(false)
    useEffect(() => {
        MovieListData();//direct
    }, [])
    const MovieListData = async () => {
        setVisible(true)
        // const params = {
        //     categoryID: categoryID
        // }
        try {
            const response = await apiCall
                ('POST', ENDPOINTS.MOVIELIST);
                //alert(response.status)
            if (response.status === 200) {
                console.log('response: ', response);
                setVisible(false)
                // alert(JSON.stringify((response.data.base_url)))
                setMOVIEDATA(response.data.data)
                setBaseURL(response.data.base_url)
                // setCategoryID(response.data.data.category)
            }
            else {
                console.log(response.data.message)
                setVisible(false)
            }
            // else if (response.data === 201) {
            //     console.log(response.data.message)
            //     setVisible(false)
            // }
            // else {
            //     navigation.navigate('SignIn')
            // }
        }
        catch (e) {
            setVisible(false)
            alert("MovieList data does not work")
        }
    }
    function OpenPopup() {
        setDialogstatus(true)
    }
    function closePopup() {
        setDialogstatus(false)
    }
    function navtobkbtn() {
        props.navigation.goBack(null)
    }
    function onnavtoMovieDetail(data) {
        props.navigation.navigate("MovieDetail", { data: data })
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <MovieList
                MOVIEDATA={MOVIEDATA}
                baseURL={baseURL}
                navtobkbtn={navtobkbtn}
                OpenPopup={() => OpenPopup()}
                onnavtoMovieDetail={onnavtoMovieDetail}
            />
            <View >
                {/* <FilterPopUp
                    status={Dialogstatus}
                    closePopup={() => closePopup()}
                /> */}
            </View>
        </View >
    )
}
export default MovieListView;