import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import UserBanner from './UserBanner';
import ProfileActions from "./ProfileActions";
import Tweetfeed from './Tweetfeed';

const Profile=()=>{
    const { profileId }=useParams();
    const [userProfile, setUserProfile]=useState(null);
    const [userTweets, setUserTweets]=useState(null);
    console.log(userTweets);
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
        <Wrapper>
            {userProfile && <UserBanner userProfile={userProfile}/>}
            <ProfileActions />
            {userTweets ? <div>
                {userTweets.tweetIds.map((id, i)=>{
                    const tweets=userTweets.tweetsById[id];
                    if(!tweets){
                        return null;
                    }
                    else{
                        return(
                            <Tweetfeed
                                key={i}
                                tweetid={id}
                                displayName={tweets.author.displayName}
                                authorHandle={tweets.author.handle}
                                status={tweets.status}
                                mediaObject={tweets.media}
                                media={(tweets.media.length>0) ? tweets.media[0].url : null}
                                timestamp={tweets.timestamp}
                                avatar={tweets.author.avatarSrc}
                                retweetHandle={(tweets.retweetFrom) ? tweets.retweetFrom.handle : null}
                                isLiked={tweets.isLiked}
                                isRetweeted={tweets.isRetweeted}
                                numLikes={tweets.numLikes}
                                numRetweets={tweets.numRetweets}
                            />
                        )
                    }
                })}
            </div> : "Loading"}
        </Wrapper>
    )
};

const Wrapper=styled.div`
    max-width:70%;
    border:1px solid #cdd0d4;
`;

export default Profile;