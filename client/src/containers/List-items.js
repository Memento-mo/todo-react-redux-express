import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { deleteItem, onHandleDone, getItem } from "../actions/index";

import ItemList from "../components/ItemList";
import Loader from "../components/Loader";

const WrappedItems = styled.div`
  width: 95%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;

const ListItems = ({ todos, deleteItem, onHandleDone, getItem, loading }) => {
  useEffect(() => {
    getItem();
  }, []);

  useEffect(() => {}, [todos]);

  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  };

  return (
    <WrappedItems>
      {todos.map(({ description, id, completed }) => (
        <ItemList
          title={description}
          done={completed}
          onHandleDelete={() => deleteItem(id)}
          onHandleDone={() => onHandleDone(id)}
          key={id}
        />
      ))}
    </WrappedItems>
  );
};

const mapStateToProps = ({ todos, loading }) => {
  return {
    todos,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => deleteItem(id)(dispatch),
    onHandleDone: id => onHandleDone(id)(dispatch),
    getItem: () => getItem()(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
