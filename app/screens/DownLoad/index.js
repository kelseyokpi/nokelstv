import React, { useEffect } from 'react';
import Download from './components/download';
const Downloadview = (props) => {

    // useEffect(() => {
        
    // }, [])

    function onnavtodashboard() {
        props.navigation.goBack(null)
    }
    return (
        <Download
            onnavtodashboard={onnavtodashboard}
        />
    )
}
export default Downloadview;