import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, } from "react-router-dom";

const ProfileActions = () => {
    
    return(
        <Wrapper>
            <Tweets>Tweets</Tweets>
            <Media>Media</Media>
            <Likes>Likes</Likes>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100%;
    border-bottom:solid 1px gray;
`;

const Tweets = styled.button`
    width: 33.3%;
    padding:10px;
    outline:none;
    border:none;
    background-color:white;
    &:hover {
        cursor:pointer;
        border-bottom: solid 3px black;
}
`;

const Media = styled.button`
    width: 33.3%;
    padding: 10px;
    outline:none;
    border:none;
    background-color:white;
    &:hover {
        cursor:pointer;
        border-bottom: solid 3px black;
}
`;

const Likes = styled.button`
    width: 33.3%;
    padding: 10px;
    outline:none;
    border:none;
    background-color:white;
    &:hover {
        cursor:pointer;
        border-bottom: solid 3px black;
    }
`;

export default ProfileActions;