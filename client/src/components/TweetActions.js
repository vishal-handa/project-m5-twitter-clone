import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const TweetActions=()=>{
    return(
        <>
            <Icons><FaRegComment /><FaRetweet/><FaRegHeart/><FiUpload/></Icons>
        </>
    )
};

const Icons=styled.div`
    margin-inline-start: 60px;
    margin-right:50px;
    width:100%;
    svg{
        margin-right:100px;
    }
`;

export default TweetActions;