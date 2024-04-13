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

    const defaultProductData = {
        "asin": "",
        "productName":"",
        "addedAt":"",
        "limitPrice":"",
        "minPriceWasAt":"",
        "lastPrice":"",
        "minPrice":""
    };

    // Set state for ASIN
    const [productData, setProductData] = useState(defaultProductData);

    // Update ASIN
    const updateProductData = (asin, productName, addedAt, limitPrice, minPrice, minPriceWasAt, lastPrice) => {
        setProductData(prevData => ({
            ...prevData,
            asin: asin,
            productName: productName,
            addedAt: addedAt,
            limitPrice: limitPrice,
            minPriceWasAt: minPriceWasAt,
            lastPrice: lastPrice,
            minPrice: minPrice
        }));
    };

    // Provide context value
    return(
        <AuthContext.Provider value={{data, updateData, productData, updateProductData}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthDataContext;
