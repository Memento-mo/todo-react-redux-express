import * as TYPES from "../actions/types";
import axios from "axios";

export const deleteItem = id => async dispatch => {
  await axios.put("/api/tasks", { id });

  getItem()(dispatch);
};

export const getItem = () => async dispatch => {
  dispatch({ type: TYPES.START_LOADING });
  const res = await axios.get("/api/tasks");
  dispatch({
    type: TYPES.READ_TODOS,
    payload: res.data
  });
  dispatch({ type: TYPES.FINISH_LOADING });
};

export const addItem = title => async dispatch => {
  await axios.post("/api/task", { title });

  getItem()(dispatch);
};

export const onHandleDone = id => async dispatch => {
  await axios.patch("/api/task", { id });

  getItem()(dispatch);
};
