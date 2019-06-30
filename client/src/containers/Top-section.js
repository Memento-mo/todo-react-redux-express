import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Task from '../components/Task';

const WrappedSection = styled.div`
  height: 25%;
  padding-bottom: 20px;
`;

const TopSection = () => {
  return (
  <WrappedSection>
    <Header 
      title={`Список задач`}
      size={40}/>
    <Task />
  </WrappedSection>
  )
}

export default TopSection