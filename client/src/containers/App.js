import React from 'react';
import styled from 'styled-components';

import TopSection from './Top-section';
import ContentSection from './Content-section';
import {
  Router, 
  Switch, 
  Route, 
  Redirect } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
`

const ContentWrapper = styled.div`
  position: relative;
  min-height: 600px;
  width: 800px;
  top: 15%;
  margin: 0 auto;
`;

const Application = () => {
  return (
    <ContentWrapper>
      <TopSection/>
      <ContentSection />
    </ContentWrapper>
  )
}

const App = () => {
  return (
    <Wrapper>
      <Switch>
        <Route to={`${process.env.PUBLIC_URL}`} component={Application}/>
      </Switch>
    </Wrapper>
  )
}

export default App