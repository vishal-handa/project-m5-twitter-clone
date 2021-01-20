import React from 'react';
import styled from 'styled-components';

const Homefeed=({homefeed})=>{
    console.log(homefeed);

    return(
        <Wrapper>
            <input></input>
            {homefeed && <div>{homefeed.tweetIds.map(elem=>{
                
                return (
                    <>
                        <p>{homefeed.tweetsById[elem].author.handle}</p>
                    </>
                )
            })}</div>}
    </Wrapper>
    )
};

const Wrapper=styled.div`

`;

export default Homefeed;