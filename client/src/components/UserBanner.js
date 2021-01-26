import React from 'react';
import styled from 'styled-components';
import { format } from "date-fns";
import { IoLocationOutline, IoCalendarClearOutline } from "react-icons/io5"

const UserBanner=({userProfile})=>{
    if(userProfile){
        const banner=userProfile.profile.bannerSrc;
        const avatar=userProfile.profile.avatarSrc;
        const name=userProfile.profile.displayName;
        const handle=userProfile.profile.handle;
        const bio=userProfile.profile.bio;
        const location=userProfile.profile.location;
        const joined=format(new Date(userProfile.profile.joined),"MMMM yyyy" );
        const followers=userProfile.profile.numFollowers;
        const following=userProfile.profile.numFollowing;
        const isFollowed=userProfile.profile.isBeingFollowedByYou;
        const isFollowing=userProfile.profile.isFollowingYou;
        return(
            <Wrapper>
                <Images>
                    <Banner src={banner}/>
                    <Avatar src={avatar}/>
                </Images>
                <ProfileDetails>
                    <UserName>{name}</UserName>
                    <span>@{handle}{"   "}</span>
                    {isFollowing && <ContionalFollow>
                        Follows you
                    </ContionalFollow>}
                    <p>{bio}</p>
                    <Container>
                        <Location>
                            <span><IoLocationOutline/></span>
                            <span>{location}</span>
                        </Location>
                        <Calendar>
                            <span><IoCalendarClearOutline/></span>
                            <span>{joined}</span>
                        </Calendar>
                    </Container>
                    <Container2>
                        <Following>
                            <span>
                                <strong>{following}{"  "}</strong>
                                Following
                            </span>
                        </Following>
                        <Followers>
                            <span>
                                <strong>{followers}{"  "}</strong>
                                Followers
                            </span>
                        </Followers>
                    </Container2>
                </ProfileDetails>
            </Wrapper>
        )
    }
    
};

const Wrapper=styled.div`
    
`;

const Images=styled.div`
    height:400px;
`;

const Banner=styled.img`
    width:100%;
    height:300px;
    object-fit: cover;
`;

const Avatar=styled.img`
    position:relative;
    height: 170px;
    width:170px;
    top:-95px;
    left:30px;
    border-radius:50%;
    border:3px solid white;
`;

const ProfileDetails=styled.div`
    padding:0px 0px 0px 30px;
`;

const UserName=styled.p`
    font-size:1.5em;
    font-weight:bold;
    margin-block-start: 0.4em;
    margin-block-end: 0.4em;
`;

const ContionalFollow=styled.span`
    font-size:14px;
    padding:4px;
    background:#cdd0d4;
    border-radius:5px;
`;

const Container=styled.div`
    display:flex;
    margin-bottom:5px;
    color:gray;
`;

const Location=styled.div`
    margin-right:5%;
    &>span>svg{
        padding-right:4px;
    }
`;

const Calendar=styled.div`
    &>span>svg{
        padding-right:4px;
    }
`;

const Container2=styled.div`
    display:flex;
    margin-top:10px;
`;

const Following=styled.div`
    margin-right:5%;
`;

const Followers=styled.div`
    
`;

export default UserBanner;