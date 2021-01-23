import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

import { FaRetweet} from "react-icons/fa";
import TweetActions from './TweetActions';
import { format } from "date-fns";

const Tweetdetails=()=>{
    const { tweetId } = useParams();
    const [bigTweet, setBigTweet] = useState(null);
    //console.log("tweet id", tweetId);

    useEffect(()=>{
        fetch(`/api/tweet/${tweetId}`)
        .then(res=>res.json())
        .then(res=>setBigTweet(res));
    },[tweetId]);


    return(
        <Wrapper>
            {bigTweet && 
            <div>
                <Retweet>
                    { (bigTweet.tweet.retweetFrom) && <p> <FaRetweet/> by {bigTweet.tweet.retweetFrom.handle}</p>}
                </Retweet>
                <Section>
                    <TweetBody>
                        <Img src={bigTweet.tweet.author.avatarSrc}/>
                        <div>
                            <div>
                                <DisplayName>
                                    {bigTweet.tweet.author.displayName}
                                </DisplayName>
                                <Handle> 
                                    {" "}@{bigTweet.tweet.author.handle}
                                </Handle>
                            </div>
                            <Tweet>{bigTweet.tweet.status}</Tweet>
                            {(bigTweet.tweet.media[0]) && <Media src={bigTweet.tweet.media[0].url} alt="Media"/>}
                            <span> {format(new Date(bigTweet.tweet.timestamp), "hh:mm a '-' LLL do yyyy")}</span>
                        </div>
                        
                    </TweetBody>
                    <TweetActions />
                </Section>
            </div>
            
        }
        </Wrapper>
    )
}

const Wrapper=styled.div`
    padding:20px;
    max-width:70%;
`;

const Retweet=styled.div`
margin-top:10px;
margin-left:30px;
    &>p{
        color:gray;
        font-size:12px;
        margin-block-start: 0em;
        margin-block-end: 0em;
    }
`;

const Section=styled.div`
    padding:10px;
`;


const TweetBody=styled.div`
    display:flex;
    justify-content:flex-start;
    padding:0px 12px 12px 12px;
`;

const Img=styled.img`
    height:40px;
    width:40px;
    border-radius:50%;
    margin-right:10px;
`;

const Media=styled.img`
    border-radius:4%;
    height:75%;
    width:60%;
    padding:10px 10px 10px 0px;
`;

const DisplayName=styled.span`
    font-size:14px;
    font-weight:bold;
`;

const Handle=styled.span`
    font-size:13px;
    color:gray;
`;

const Tweet=styled.p`
    font-size:14px;
    margin-block-start: 0.6em;

`;

export default Tweetdetails;