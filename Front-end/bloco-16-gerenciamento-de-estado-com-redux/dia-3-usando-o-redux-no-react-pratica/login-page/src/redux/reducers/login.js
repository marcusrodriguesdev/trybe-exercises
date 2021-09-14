import { SUBMIT_LOGIN } from "../actions";

const INNITAL_STATE = {};

function loginReducer(state = INNITAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_LOGIN:
    return action.payload;
  default:
    return state;
  }
}

export default loginReducer;
