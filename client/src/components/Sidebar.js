import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyles from "./Globalstyles";
import Logo from "./assets/logo.svg";
import COLORS from "./constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";

const Sidebar=()=>{
    return(
        <Wrapper>
            <GlobalStyles />
            <Image src={Logo} />
            <NewLink exact to="/">
                <FiHome style={{marginRight:"20px"}}/>
                Home
            </NewLink>
            <NewLink to="/:profileId">
                <FiUser style={{marginRight:"20px"}}/>
                Profile
            </NewLink>
            <NewLink to="/notifications">
                <FiBell style={{marginRight:"20px"}}/>
                Notifications
            </NewLink>
            <NewLink to="/bookmarks">
                <FiBookmark style={{marginRight:"20px"}}/>
                Bookmarks
            </NewLink>
            <Button>Meow</Button>
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

const Button=styled.button`
    text-align:center;
    background:${COLORS.primary};
    color:white;
    padding:15px 30px 15px 30px;
    border-radius: 60px;
    outline:none;
    border:none;
    &:hover{
        cursor:pointer;
    }
`;

const NewLink=styled(Link)`
    text-decoration:none;
    margin-bottom:10%;
    padding:15px 30px 15px 30px;
    background:white;
    color:black;
    &:hover{
        border-radius: 60px;
        background:${COLORS.hovering};
        color:${COLORS.primary};
    }
    &.active{
        background:${COLORS.primary};
        color:white;
    }
`;

const Div=styled.div`
    display:flex;
`;

export default Sidebar;