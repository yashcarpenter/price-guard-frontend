import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthDataContext = (props) =>{
    // Check if all required data is present in localStorage
    const storedData = localStorage.getItem('userData');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Set default data object if any required data is missing in localStorage
    const defaultData = storedData ? JSON.parse(storedData) : {
        "userName": "",
        "password": "",
        "email": "",
        "isLoggedIn": false
    };

    // Set state for user data
    const [data, setData] = useState(defaultData);

    // Update localStorage when data state changes
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(data));
    }, [data]);

    // Update user data and save to localStorage
    const updateData = (username, password, email, isLoggedIn) => {
        const newData = {
            ...data,
            userName: username,
            password: password,
            email: email,
            isLoggedIn: isLoggedIn
        };
        setData(newData);
        localStorage.setItem('userData', JSON.stringify(newData));
    };

    const defaultAsin = {
        "asin": ""
    };

    // Set state for ASIN
    const [asin, setAsin] = useState(defaultAsin);

    // Update ASIN
    const updateAsin = (asin) => {
        setAsin(prevData => ({
            ...prevData,
            asin: asin
        }));
    };

    // Provide context value
    return(
        <AuthContext.Provider value={{data, updateData, asin, updateAsin}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthDataContext;
