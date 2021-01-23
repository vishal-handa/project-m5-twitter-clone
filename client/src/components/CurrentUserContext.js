import React, { useEffect, useState } from 'react';

export const CurrentUserContext=React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState("loading");
    const [homefeed, setHomefeed] = useState(null);
    

    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`

    const fetchHomeFeed = async () =>{
        fetch("/api/me/home-feed")
        .then(res=>res.json())
        .then(res=>  setHomefeed(res))
    
        fetch("api/me/profile",{
            method:"GET",
        })
            .then(res=>res.json())
            .then(res=>{
                setCurrentUser(res);
                setStatus("idle");
            })
    }
    
    useEffect(()=>{
        fetchHomeFeed();
    },[]);

    return (
        <CurrentUserContext.Provider value={{ 
            currentUser, 
            status, 
            homefeed, 
            fetchHomeFeed,
        }}>
            {children}
        </CurrentUserContext.Provider>
    );
};