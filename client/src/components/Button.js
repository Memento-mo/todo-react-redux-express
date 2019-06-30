import React from 'react';
import styled  from 'styled-components';

const ButtonMain = styled.button`
  margin-right: 10px;
  border: none;
  color: #fff;
  transition: 0.2s ease;
  cursor: pointer;
  background: url(${props => {
    if (!props.img) {
      return null
    }
    return props.img.icon
  }}) no-repeat center;
  width: ${props => {
    if (!props.img) {
      return null
    }

    return props.img.width
  }};
  height: ${props => {
    if (!props.img) {
      return null
    }
    return props.img.height
  }};
  background-size: contain;

  &:hover {
    background: url(${props => {
      if (!props.img) {
        return null
      }
      return props.img.iconAfter
    }}) no-repeat center;
    background-size: contain;
  }

`;

const Button = ({ func, img }) => {
  return (
    <ButtonMain type="submit" img={img} onClick={func} />
  )
}

export default Button;