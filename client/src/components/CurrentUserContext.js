import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
export const CurrentUserContext=React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState("loading");
    const [homefeed, setHomefeed] = useState(null);
    const [bigTweet, setBigTweet] = useState(null);
    let { tweetID }=useParams();

    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`

    useEffect(()=>{
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
    },[])

    useEffect(()=>{
        fetch(`api/tweet/${tweetID}`)
        .then(res=>res.json())
        .then(res=>setBigTweet(res))
    },[tweetID])



    return (
        <CurrentUserContext.Provider value={{ 
            currentUser, 
            status, 
            homefeed, 
            bigTweet 
            }}>
            {children}
        </CurrentUserContext.Provider>
    );
};