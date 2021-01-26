import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import COLORS from "./constants";
import ErrorPage from './ErrorPage';

const TweetActions=({isLiked,
    isRetweeted,
    numLikes,
    numRetweets,
    tweetid})=>{
        const [tweetLiked, setTweetLiked]=useState(isLiked);
        const [numOfLikes, setNumOfLikes]=useState(numLikes);
        const [tweetRetweeted, setTweetRetweeted]=useState(isRetweeted);
        const [numOfRetweets, setNumOfRetweets]=useState(numRetweets);
        const [error, setError]=useState(false);
        const handleLike=()=>{
            if(tweetLiked){
                setTweetLiked(!tweetLiked);
                setNumOfLikes(numOfLikes-1);
            }
            else{
                setTweetLiked(!tweetLiked);
                setNumOfLikes(numOfLikes+1);
            }
            fetch(`api/tweet/${tweetid}/like`,{
                method:"PUT",
                body:JSON.stringify({like:!tweetLiked}),
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            })
            .then(res=>res.json())
            .then(res=>console.log(res))
            .catch(err=>setError(true));
        };

        const handleRetweet=()=>{
            if (tweetRetweeted){
                setTweetRetweeted(!tweetRetweeted);
                setNumOfRetweets(numOfRetweets - 1);
            } 
            else{
                setTweetRetweeted(!tweetRetweeted);
                setNumOfRetweets(numOfRetweets + 1);
            }
            fetch(`/api/tweet/${tweetid}/retweet`, {
                method: "PUT",
                body: JSON.stringify({retweet: !tweetRetweeted,}),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>setError(true));
        };
        return(
            <Icons>
                <Button>
                    <FaRegComment />
                </Button>
                
                <Button onClick={handleRetweet}>
                    <FaRetweet fill={numOfRetweets>0 ? "#19cf86" : null} />
                    {numOfRetweets>0 ? <span>{"   "}{numOfRetweets}</span> : <span>{"   "}</span>}
                </Button>
                
                <Button onClick={handleLike}>
                    <FaRegHeart fill={numOfLikes>0 ? "red" : null}/>
                    {numOfLikes>0 ? <span>{"   "}{numOfLikes}</span> : <span>{"  "}</span>}
                </Button>
                
                <Button>
                    <FiUpload/>
                </Button>
            </Icons>
        )
};

const Icons=styled.div`
    margin-inline-start: -45px;
    margin-right:50px;
    width:100%;
    svg{
        margin-left:100px;
    }
`;

const Button=styled.button`
    border: none;
    outline:none;
    background: none;
    cursor: pointer;
    color: grey;
`;

export default TweetActions;

// isLiked,
//     isRetweeted,
//     numLikes,
//     numRetweets,
//     tweetid