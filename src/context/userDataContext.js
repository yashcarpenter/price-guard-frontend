import React, { useState } from "react";
import UserContext from "./UserContext";

const UserDataContext = (props) =>{
    const defaultData = {
        "userName": " ",
        "password":" ",
        "email":" ",
        "isLoggedIn": false
    }
    const [data, setData] = useState(defaultData);
    const updateData = (username, password, email, isLoggedIn) => {
        setData(prevData => ({
            ...prevData,
            userName: username,
            password: password,
            email: email,
            isLoggedIn: isLoggedIn
        }));
    };

    const defaultAsin = {
        "asin": ""
    }
    const [asin, setAsin] = useState(defaultAsin);
    const updateAsin = (asin) => {
        setAsin(prevData => ({
            ...prevData,
            asin: asin
        }));
    };

    return(
        <UserContext.Provider value={{data, updateData, asin, updateAsin}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserDataContext;
