import { createStore, applyMiddleware } from "redux";
import { cakeReducer } from "./cakes/cake-reducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(cakeReducer, applyMiddleware(thunkMiddleware));

export default store;
