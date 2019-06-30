import React from "react";
import styled from "styled-components";

import Button from "./Button";

import doneBefore from "../img/beforeChecked.png";
import doneAfter from "../img/afterChecked.png";
import trashBefore from "../img/trashBefore.png";
import trashAfter from "../img/trashAfter.png";

const WrappedItem = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px;
  opacity: ${props => (props.done ? 0.3 : 1)};
  transition: 0.3s ease;
  border-bottom: 1px solid rgba(158,158,158, .3);
  border-top: 1px solid rgba(158, 158, 158, .3);
`;

const Title = styled.div`
  font-size: 18px;
`;

const WrappedButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemList = ({ title, done, onHandleDelete, onHandleDone }) => {
  const doneOptions = {
    icon: done ? doneAfter : doneBefore,
    iconAfter: done ? doneBefore : doneAfter,
    width: "18px",
    height: "18px"
  };

  const trashOptions = {
    icon: done ? trashAfter : trashBefore,
    iconAfter: done ? trashBefore : trashAfter,
    width: "17px",
    height: "17px"
  }

  return (
    <WrappedItem done={done}>
      <Title>{title}</Title>
      <WrappedButtons>
        <Button img={doneOptions} func={onHandleDone} />
        <Button img={trashOptions} func={onHandleDelete} />
      </WrappedButtons>
    </WrappedItem>
  );
};

export default ItemList;
