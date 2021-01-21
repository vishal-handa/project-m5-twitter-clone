import React from 'react';
import styled from 'styled-components';
import { CurrentUserContext } from "./CurrentUserContext";

const Tweetdetails=()=>{
    const { bigTweet }=React.useContext(CurrentUserContext);
    console.log(bigTweet);
    return(
        <div>
            bigTweet
        </div>
    )
}

export default Tweetdetails;