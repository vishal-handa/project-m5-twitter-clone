import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';
import COLORS from "./constants";
import Tweetfeed from "./Tweetfeed";
import { CurrentUserContext } from "./CurrentUserContext";

const Homefeed=()=>{
    const { currentUser, homefeed }=React.useContext(CurrentUserContext);
    console.log(currentUser);

    return(
        <Main>
            { currentUser && <Header>
                <Img src={currentUser.profile.avatarSrc}/>
                <Form>
                    <Input placeholder="What's on your mind?"/>
                    <Button>Meow</Button>
                </Form>
            </Header>}
            
            
            <Bar/>
            {homefeed ? <div>{homefeed.tweetIds.map(id=>{
                const tweets=homefeed.tweetsById[id];
                return (
                    <Tweetfeed
                        tweetid={id}
                        displayName={tweets.author.displayName}
                        authorHandle={tweets.author.handle}
                        status={tweets.status}
                        mediaObject={tweets.media}
                        // media={(tweets.media.length>0) ? tweets.media[0].url : ""}
                        timestamp={tweets.timestamp}
                        avatar={tweets.author.avatarSrc}
                        retweetHandle={(tweets.retweetFrom) ? tweets.retweetFrom.handle : null}
                    />
                )
            })}</div> : "Loading"}
    </Main>
    )
};

const Main=styled.div`
    border:1px solid #cdd0d4;
    max-width:70%;
`;

const Bar=styled.div`
    width:100%;
    height:10px;
    background:#cdd0d4;
    outline:none;
`;

const Img=styled.img`
    height:40px;
    width:40px;
    border-radius:50%;
`;

const Header=styled.div`
    display:flex;
`;
const Form=styled.form`
    display:grid;
    width:100%;
    float:right;
`;

const Input=styled.textarea`
    height: 100px;
    border:none;
    resize:none;
    &.active{
        outline:none;
    }
`;

const Button=styled.button`
    width:70px;
    float:right;
    background:${COLORS.primary};
    color:white;
    padding:10px;
    outline:none;
    border:none;
    border-radius:60px;
    &:hover{
        cursor:pointer;
    }
`;

export default Homefeed;