import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';
import COLORS from "./constants";
import Tweetfeed from "./Tweetfeed";
import { CurrentUserContext } from "./CurrentUserContext";


const Homefeed=()=>{
    const [value, setValue]=useState("");
    const { currentUser, homefeed, fetchHomeFeed }=React.useContext(CurrentUserContext);
    const maxCharacterLength=140;


    const handleSubmit=(ev)=>{
        ev.preventDefault();
        fetch("/api/tweet",{
            method: 'POST',
            body:    JSON.stringify({status:value}),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res=>res.json())
        .then(res=> fetchHomeFeed())
    }

    let charlength=maxCharacterLength-value.length;

    return(
        <Main>
            { currentUser && <Header>
                <Form id="input-form" onSubmit={handleSubmit}>
                    <div>
                        <Img src={currentUser.profile.avatarSrc}/>
                        <Input  id="textarea"
                                placeholder="What's on your mind?" 
                                onChange={(ev)=>setValue(ev.target.value)} 
                                value={value}/>
                    </div>
                    <MiniContainer>
                        <CharCount style={{color: charlength>=0? "black" : "red"}}>{charlength}</CharCount>
                        <Button>Meow</Button>
                    </MiniContainer>
                </Form>
            </Header>}
            <Bar/>
            {homefeed ? <div>{homefeed.tweetIds.map((id, i)=>{
                const tweets=homefeed.tweetsById[id];
                if(!tweets){
                    return null
                }
                return (
                    <Tweetfeed
                        key={i}
                        tweetid={id}
                        displayName={tweets.author.displayName}
                        authorHandle={tweets.author.handle}
                        status={tweets.status}
                        mediaObject={tweets.media}
                        media={(tweets.media.length>0) ? tweets.media[0].url : null}
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
    vertical-align: top;
    padding:5px;
    height:40px;
    width:40px;
    border-radius:50%;
`;

const Header=styled.div`
    display:flex;
`;
const Form=styled.form`
    width:100%;
    float:right;
`;

const Input=styled.textarea`
    width:93%;
    height:100px;
    border:none;
    outline:none;
    resize:none;
    &.active{
        outline:none;
    }
`;

const MiniContainer=styled.div`
display:flex;
    float:right;
`;

const CharCount=styled.p`
    margin-right:10px;
`;

const Button=styled.button`
    width:70px;
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