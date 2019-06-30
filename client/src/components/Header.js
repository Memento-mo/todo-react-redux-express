import React from 'react';

import styled from 'styled-components';

const HeaderWrapped = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  text-align: center;
  font-size: ${props => props.size}px;
  font-weight: 400;
`;

const Header = ({ title, size }) => {
  return (
    <HeaderWrapped>
      <Title size={size}>{title}</Title>
    </HeaderWrapped>
  )
}

export default Header;