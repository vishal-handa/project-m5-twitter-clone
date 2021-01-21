
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
import { CurrentUserContext } from "./components/CurrentUserContext";

const App=()=>{
  const { currentUser, homefeed }=React.useContext(CurrentUserContext);
  useEffect(()=>{
    document.title="Critter || Meow away!";
  },[])
  console.log(currentUser);
  return(
    <Section>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/"><Homefeed homefeed={homefeed} currentUser={currentUser}/></Route>
          <Route exact path="/notifications"><Notifications /></Route>
          <Route exact path="/Bookmarks"><Bookmarks /></Route>
          <Route exact path="/tweet/:tweedId"><Tweetdetails /></Route>
          <Route exact path="/profile/:profileId"><Profile /></Route>
        </Switch>
      </Router>
    </Section>
  )
}

const Section=styled.section`
  margin-left:8%;
  margin-right:8%;
  display:flex;
  flex-direction:row;
`;


export default App;
