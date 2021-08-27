import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  loginReducer  from "../reducers/login";

const store = createStore(loginReducer, composeWithDevTools());

export default store;