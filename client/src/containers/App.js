import React from "react";
import styled from "styled-components";

import TopSection from "./Top-section";
import ContentSection from "./Content-section";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const ContentWrapper = styled.div`
  position: relative;
  min-height: 600px;
  width: 800px;
  top: 15%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TopSection />
        <ContentSection />
      </ContentWrapper>
    </Wrapper>
  );
};

export default App;
