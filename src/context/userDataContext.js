import React, { useState } from "react";
import UserContext from "./UserContext";

const UserDataContext = (props) =>{
    const defaultData = {
        "userName": " ",
        "password":" ",
        "email":" ",
        "isLoggedIn":"false"
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

    return(
        <UserContext.Provider value={{data, updateData}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserDataContext;
