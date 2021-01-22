import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import TweetActions from './TweetActions';

const Tweetdetails=()=>{
    const { tweetId } = useParams();
    const [bigTweet, setBigTweet] = useState(null);
    console.log("tweet id", tweetId);

    useEffect(()=>{
        fetch(`/api/tweet/${tweetId}`)
        .then(res=>res.json())
        .then(res=>setBigTweet(res))
    },[tweetId]);

    console.log(bigTweet);
    
    return(
        <Wrapper>{bigTweet && 
            <div>
                {/* <Retweet>
                    { (bigtweet.retweetFrom) && <p> <FaRetweet/> by {retweetHandle}</p>}
                </Retweet>
                <Section>
                    <TweetBody  onClick={()=>handleclick()}>
                        <Img src={avatar}/>
                        <div>
                            <div>
                                <DisplayName>
                                    {displayName}
                                </DisplayName>
                                <Handle> 
                                    {" "}@{authorHandle}
                                </Handle>
                                <span> - {newTime}</span>
                            </div>
                            <Tweet>{status}</Tweet>
                            <Media src={media} alt="Media"/>
                            
                        </div>
                    </TweetBody>
                    <TweetActions />
                </Section> */}
            </div>
            
        }</Wrapper>
    )
}

const Wrapper=styled.div`
    padding:20px;
`;

export default Tweetdetails;