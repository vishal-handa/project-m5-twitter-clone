import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';
import { FaRetweet} from "react-icons/fa";
import { format } from "date-fns";
import TweetActions from "./TweetActions";

const Tweetfeed=({
    tweetid,
    displayName,
    authorHandle,
    status,
    mediaObject,
    media,
    timestamp,
    avatar,
    retweetHandle,
    isLiked,
    isRetweeted,
    numLikes,
    numRetweets,
})=>{
    const [tweetLiked, setTweetLiked]=useState(isLiked);
    const [numOfLikes, setNumOfLikes]=useState(numLikes);
    const [tweetRetweeted, setTweetRetweeted]=useState(isRetweeted);
    const [numOfRetweets, setNumOfRetweets]=useState(numRetweets)
    let history = useHistory();
    const newTime = format(new Date(timestamp), "LLL do");

    const handleclick=()=>{
        history.push(`/tweet/${tweetid}`);
    }
    return(
        <Wrapper>
            <Retweet>
                { (retweetHandle) && <p> <FaRetweet/> by {retweetHandle}</p>}
            </Retweet>
            <Section>
                <TweetBody>
                    <Img src={avatar}/>
                    <div>
                        <StyledLink  to={`/profile/${authorHandle}`}>
                            <DisplayName>
                                {displayName}
                            </DisplayName>
                        </StyledLink>
                        <Handle> 
                                {" "}@{authorHandle}
                            </Handle>
                        <span> - {newTime}</span>
                        <div  onClick={()=>handleclick()}>
                            <Tweet>{status}</Tweet>
                            {media && <Media src={media} alt="Media"/>}
                        </div>
                    </div>
                </TweetBody>
                <TweetActions   tweetLiked={tweetLiked}
                                setTweetLiked={setTweetLiked}
                                numOfLikes={numOfLikes}
                                setNumOfLikes={setNumOfLikes}
                                tweetRetweeted={tweetRetweeted}
                                setTweetRetweeted={setTweetRetweeted}
                                numOfRetweets={numOfRetweets}
                                setNumOfRetweets={setNumOfRetweets}
                                tweetid={tweetid}
                />
            </Section>
        </Wrapper>
    )
};

const Wrapper=styled.div`
    display:block;
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
    border-bottom:1px solid #cdd0d4;
    padding:10px;
`;


const TweetBody=styled.div`
    display:flex;
    justify-content:flex-start;
    padding:0px 12px 12px 12px;
    &:hover{
        cursor:pointer;
    }
    
`;

const StyledLink=styled(Link)`
    text-decoration:none;
    color:black;
    &:hover{
        text-decoration:underline;
    }
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


export default Tweetfeed;