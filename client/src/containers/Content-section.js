import React from 'react';
import styled from 'styled-components';

import ListItems from './List-items';

const WrappedSection = styled.div``;

const ContentSection = () => {
  return (
    <WrappedSection>
      <ListItems/>
    </WrappedSection>
  )
}

export default ContentSection;