import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import COLORS from "./constants";

const Homefeed=({homefeed, currentUser})=>{
    console.log(homefeed);

    return(
        <Main>
            <form>
            <Input placeholder="What's on your mind?"/>
            <div>
                <Button>Meow</Button>
            </div>
            </form>
            <Bar/>
            {homefeed ? <div>{homefeed.tweetIds.map(elem=>{
                
                return (
                    <Wrapper>
                        <Retweet>
                            {(homefeed.tweetsById[elem].retweetFrom)? <p> <FaRetweet/> by {homefeed.tweetsById[elem].retweetFrom.handle}</p> : null}
                        </Retweet>
                        <Section>
                            <TweetBody>
                                <Img src={homefeed.tweetsById[elem].author.avatarSrc}/>
                                <div>
                                    <div>
                                        
                                        <DisplayName>
                                            {homefeed.tweetsById[elem].author.displayName}
                                        </DisplayName>
                                        <Handle> 
                                            {" "}@{homefeed.tweetsById[elem].author.handle}
                                        </Handle>
                                        {/* <span> {homefeed.tweetsById[elem].timestamp}</span> */}
                                    </div>
                                    <Tweet>{homefeed.tweetsById[elem].status}</Tweet>
                                    {console.log(homefeed.tweetsById[elem].media[0])}
                                    {homefeed.tweetsById[elem].media && <img src={homefeed.tweetsById[elem].media[0].url}/>}
                                    <Icons><FaRegComment/><FaRetweet/><FaRegHeart/><FiUpload/></Icons>
                                </div>
                            </TweetBody>
                        </Section>
                    </Wrapper>
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
    margin-top:35px;
`;

const Input=styled.textarea`
    width:99%;
    height: 100px;
    border:none;
    &.active{
        outline:none;
    }
`;

const Button=styled.button`
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

const Wrapper=styled.div`
    display:block;
`;

const Retweet=styled.p`
margin-left:30px;
    &>p{
        color:gray;
        font-size:12px;
        margin-block-start: 0;
        margin-block-end: 0em;
    }
`;

const Section=styled.div`
    display:flex;
    justify-content:flex-start;
    border-bottom:1px solid #cdd0d4;
`;


const TweetBody=styled.div`
    display:flex;
    justify-content:flex-start;
    padding:0px 12px 12px 12px;
`;

const Img=styled.img`
    height:40px;
    width:40px;
    border-radius:50%;
    margin-right:10px;
`;

const DisplayName=styled.span`
    font-size:14px;
    font-weight:bold;
`;

const Handle=styled.span`
    font-size:13px;
    color:gray;
`;

const Tweet=styled.p`
    font-size:14px;
    margin-block-start: 0.6em;

`;

const Icons=styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
`;

export default Homefeed;