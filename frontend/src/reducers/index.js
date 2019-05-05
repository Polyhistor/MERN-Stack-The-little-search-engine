import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";

export default combineReducers({
  // the query is being created in the state
  people: peopleReducer
});
