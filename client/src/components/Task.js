import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addItem } from "../actions/index";

import Button from "./Button";

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const Group = styled.div`
  position: relative;
  margin-right: 15px;
  width: 100%;
`;

const Label = styled.label`
  color: #000;
  font-size: 16px;
  position: absolute;
  pointer-events: none;
  left: 1%;
  top: 0px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const Span = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: #0097A7;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

const Input = styled.input`
  font-size: 16px;
  padding: 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  background: transparent;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -20px;
    font-size: 14px;
    color: #0097A7;
  }

  &:focus ~ ${Span}:before, &:focus ~ ${Span}:after {
    width: 50%;
  }
`;

const titleRef = React.createRef();

const Task = ({ addItem }) => {
  return (
    <Fragment>
      <Form>
        <Group>
          <Input type="text" ref={titleRef} required />
          <Span />
          <Label>Введите задачу</Label>
        </Group>
        <Button
          func={e => {
            e.preventDefault();
            titleRef.current.value === ""
              ? addItem("Empty")
              : addItem(titleRef.current.value);
            titleRef.current.value = "";
          }}
        />
      </Form>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: title => addItem(title)(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
