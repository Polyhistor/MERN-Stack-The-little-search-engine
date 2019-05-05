import { FETCH_PEOPLE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return action.payload || false;
    default:
      return state;
  }
}
