import { FETCH_DATA, SET_LOADING, CONCAT_DATA } from "../actions/actionTypes";

// #2 a - create initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// #2 b - create reducer function
const listReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: !state.loading };
    case FETCH_DATA:
      return { ...state, data: action.payload }; // store all data into state
    case CONCAT_DATA:
      return { ...state, data: state.data.concat(action.payload) }; // concat payload data into current state
    default:
      return state;
  }
};

export default listReducer;
