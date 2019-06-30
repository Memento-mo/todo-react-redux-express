import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  todos: [],
  id: 4,
  loading: false
}

const findIndex = (id, state) => {
  return state.todos.findIndex(item => item.id === id)
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TYPES.READ_TODOS:
      return { ...state, todos: action.payload };
    case TYPES.START_LOADING:
      return { ...state, loading: true };
    case TYPES.FINISH_LOADING:
      return { ...state, loading: false };
    
    default:
      return state;
  }
}


export default reducer;
