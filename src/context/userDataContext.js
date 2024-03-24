import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserDataContext = (props) =>{
    const defaultData = {
        "userName": "",
        "password":"",
        "email":""
    };

    const [data, setData] = useState(defaultData);

    const updateData = (userName, password, email) => {
        setData({
            userName: userName,
            password: password,
            email: email
        });
    };

    return(
        <UserContext.Provider value={{data, updateData}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserDataContext;
