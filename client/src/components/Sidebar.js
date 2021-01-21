import React from 'react';
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyles from "./Globalstyles";
import Logo from "./assets/logo.svg";
import COLORS from "./constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar=()=>{
    const {user}=useParams();
    const { currentUser } = React.useContext(CurrentUserContext);
    //console.log(currentUser);
    return(
        <Wrapper>
            <GlobalStyles />
            <ImgLink exact to="/">
                <Image src={Logo} />
            </ImgLink>
            <NewLink exact to="/">
                <FiHome style={{marginRight:"20px"}}/>
                Home
            </NewLink>
            <NewLink to={currentUser ? `/profile/${currentUser.profile.handle}` : `/profile/${user}`}>
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
    margin-right:20px;
`;

const Image=styled.img`
    height: 65px;
    width: 50px;
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
        border:2px solid ${COLORS.primary};
        color:${COLORS.primary};
        background:white;
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
        color:${COLORS.primary};
    }
`;

const ImgLink=styled(Link)`
    height: 75px;
    width: 60px;
    padding:2px;
    &:hover{
        border-radius:50%;
        background:${COLORS.hovering}
    }
`;

export default Sidebar;