import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import apiCallReducer from "./reducers";

const rootReducer = combineReducers({ apiCallReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
