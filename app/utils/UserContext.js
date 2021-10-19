import React, { useState } from "react";

export const UserContext = React.createContext();
export const UserProvider = (props) => {
    const [userData, setUserData] = useState([])
    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    )
}

export const LocationContext = React.createContext();
export const LocationProvider = (props) => {
    const [userLocation, setLocation] = useState([])
    return (
        <LocationContext.Provider value={[userLocation, setLocation]}>
            {props.children}
        </LocationContext.Provider>
    )
}

export const SearchDataContext = React.createContext();
export const SearchDataProvider = (props) => {
    const [searchData, setSearchData] = useState([])
    return (
        <SearchDataContext.Provider value={[searchData, setSearchData]}>
            {props.children}
        </SearchDataContext.Provider>
    )
}