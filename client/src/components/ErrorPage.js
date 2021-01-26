import React from 'react';
import styled from 'styled-components';
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3';

const ErrorPage=()=>{
    
    
    return(
        <Wrapper>
            <div>{bomb}</div>
            <h1>An unknown error has occured</h1>
            <p>Please try refreshing the page.</p>
        </Wrapper>
    )
};

const Wrapper=styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
`;

export default ErrorPage;
