
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import Home from "./components/Home";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import Tweetdetails from "./components/TweetDetails";
import Sidebar from "./components/Sidebar"

const App=()=>{
  return(
    <Section>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/notifications"><Notifications /></Route>
          <Route exact path="/Bookmarks"><Bookmarks /></Route>
          <Route exact path="/tweet/:tweedId"><Tweetdetails /></Route>
          <Route exact path="/:profileId"><Profile /></Route>
        </Switch>
      </Router>
    </Section>
  )
}

const Section=styled.section`
  margin-left:13%;
  margin-right:13%;
`;


export default App;
