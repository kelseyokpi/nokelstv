import React, { useState, useEffect, useContext } from 'react';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
// import { UserContext } from '../../utils/UserContext';
import TvShowList from './components/TvShowList';
import FilterPopUp from './components/FilterPopUp';
import { View } from 'react-native'
import Loader from '../../utils/Loader';
const TvShowListView = (props) => {
    const [Dialogstatus, setDialogstatus] = useState(false)
    const [SERIALDATA, setSERIALDATA] = useState([])
    const [baseURL, setBaseURL] = useState("")
    const [visible, setVisible] = useState(false)
    // const [userData, setUserData] = useContext(UserContext)
    // const { no } = route.params
    // alert(no)
    // alert(JSON.stringify(userData))
    useEffect(() => {
        SerialListData();//direct
    }, [])
    const SerialListData = async () => {
        // setVisible(true)
        try {
            const response = await apiCall
                ('POST', ENDPOINTS.TV_SERIAL_LIST);
            if (response.status === 200) {
                setVisible(false)
                // alert(JSON.stringify((response.data.base_url.poster_url)))
                setSERIALDATA(response.data.data)
                setBaseURL(response.data.base_url)
            }
            else {
                console.log(response.data.message)
                setVisible(false)
            }
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
    function onnavtotvshowdetail(data) {
        props.navigation.navigate("TvShowDetails", { data: data })
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <TvShowList
                SERIALDATA={SERIALDATA}
                baseURL={baseURL}
                navtobkbtn={navtobkbtn}
                onnavtotvshowdetail={onnavtotvshowdetail}
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
export default TvShowListView;