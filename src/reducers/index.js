import { combineReducers } from "redux";
import listReducer from "./listReducer";
// #4 - combine all reducers
const rootReducer = combineReducers({
  list: listReducer,
});

export default rootReducer;
