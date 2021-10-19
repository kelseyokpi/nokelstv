import React, { useState, useEffect, useContext } from 'react';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
// import { UserContext } from '../../utils/UserContext';
import NewsList from './components/NewsList';
import FilterPopUp from './components/FilterPopUp';
import { View } from 'react-native'
import Loader from '../../utils/Loader';
const NewsListView = (props) => {
    const [Dialogstatus, setDialogstatus] = useState(false)
    const [NEWSDATA, setNEWSDATA] = useState([])
    const [baseURL, setBaseURL] = useState("")
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        NewsListData();//direct
    }, [])
    const NewsListData = async () => {
        setVisible(true)
        try {
            const response = await apiCall
                ('POST', ENDPOINTS.NEWS_LIST);
            if (response.status === 200) {
                setVisible(false)
                // alert(JSON.stringify((response.data.base_url)))
                setNEWSDATA(response.data.data)
                setBaseURL(response.data.base_url)
            }
            else {
                console.log(response.data.message)
                setVisible(false)
            }
            // else if (response.status === 201) {
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
    function navtodetails(data) {
        props.navigation.navigate("NewsDetails", { data: data })
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <NewsList
                NEWSDATA={NEWSDATA}
                baseURL={baseURL}
                navtobkbtn={navtobkbtn}
                OpenPopup={() => OpenPopup()}
                navtodetails={navtodetails}
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
export default NewsListView;