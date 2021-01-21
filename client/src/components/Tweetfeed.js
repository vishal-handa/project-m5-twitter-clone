import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import COLORS from "./constants";
import { format } from "date-fns";

const Tweetfeed=({
    tweetid,
    displayName,
    authorHandle,
    status,
    mediaObject,
    media,
    timestamp,
    avatar,
    retweetHandle
})=>{
    const newTime = format(new Date(timestamp), "LLL do");
    const handleclick=(ev)=>{
        let clickedID=ev.target.id;
        console.group(clickedID);
    }
    return(
        <Wrapper>
            <Retweet>
                { (retweetHandle) && <p> <FaRetweet/> by {retweetHandle}</p>}
            </Retweet>
                <Section  id={tweetid} onClick={handleclick}>
                    <TweetBody>
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
                            <img src={media}/>
                            <Icons><FaRegComment/><FaRetweet/><FaRegHeart/><FiUpload/></Icons>
                        </div>
                    </TweetBody>
                </Section>
        </Wrapper>
    )
};

const Wrapper=styled.div`
    display:block;
`;

const Retweet=styled.p`
margin-left:30px;
    &>p{
        color:gray;
        font-size:12px;
        margin-block-start: 0;
        margin-block-end: 0em;
    }
`;

const Section=styled.div`
    display:flex;
    justify-content:flex-start;
    border-bottom:1px solid #cdd0d4;
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

const Icons=styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
`;

export default Tweetfeed;