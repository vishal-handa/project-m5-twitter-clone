import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const Profile=()=>{
    const { profileId }=useParams();
    const [userProfile, setUserProfile]=useState(null);
    const [userTweets, setUserTweets]=useState(null);
    useEffect(()=>{
        fetch(`/api/${profileId}/profile`)
        .then(res=>res.json())
        .then(res=>setUserProfile(res))

        fetch(`/api/${profileId}/feed`)
        .then(res=>res.json())
        .then(res=>setUserTweets(res))
    },[])
    // console.log("user profile", userProfile);
    // console.log("user tweets", userTweets)
    return(
        <div>
            Profile
        </div>
    )
}

export default Profile;