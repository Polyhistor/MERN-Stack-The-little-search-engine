import axios from "axios";
import { FETCH_PEOPLE } from "./types";

// Query string generator
const genQueryString = (args = {}) => {
  let queryString = "";
  Object.keys(args).forEach(key => {
    if (args[key]) {
      if (key === "age") {
        queryString += `${key}${args[key]}&`;
      } else {
        queryString += `${key}=${args[key]}&`;
      }
    }
  });
  return queryString;
};

// Creating an action
export const fetchPeople = args => async dispatch => {
  const response = await axios.get(`/everyone?${genQueryString(args)}`);

  dispatch({ type: FETCH_PEOPLE, payload: response });
};
