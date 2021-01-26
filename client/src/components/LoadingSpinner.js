import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ImSpinner3 }  from "react-icons/im";

const LoadingSpinner=()=>{

    return(
        <Wrapper>
            <ImSpinner3 size={25}/>
        </Wrapper>
    )
};
const loader = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
}
`;
const Wrapper=styled.div`
    display: flex;
    height:100vh;
    width:100vw;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    animation: ${loader} 1000ms infinite linear;
`;




export default LoadingSpinner;