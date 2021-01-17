import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from "./assets/logo.svg";

const Sidebar=()=>{
    return(
        <Wrapper>
            <Image src={Logo} />
            <Link exact to="/">Home</Link>
            <Link to="/:profileId">Profile</Link>
            <Link to="/notifications">Notifications</Link>
            <Link to="/bookmarks">Bookmarks</Link>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
`;

const Image=styled.img`
    height: 75px;
    width: 60px;
`;

export default Sidebar;