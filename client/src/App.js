
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import Homefeed from "./components/Homefeed";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import Tweetdetails from "./components/TweetDetails";
import Sidebar from "./components/Sidebar";

const App=()=>{
  useEffect(()=>{
    document.title="Critter || Meow away!";
  },[])
  return(
    <Section>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/"><Homefeed/></Route>
          <Route  path="/notifications"><Notifications /></Route>
          <Route  path="/Bookmarks"><Bookmarks /></Route>
          <Route  path="/tweet/:tweetId"><Tweetdetails /></Route>
          <Route  path="/profile/:profileId"><Profile /></Route>
        </Switch>
      </Router>
    </Section>
  )
}

const Section=styled.section`
  margin-left:4%;
  margin-right:4%;
  display:flex;
  flex-direction:row;
`;


export default App;
