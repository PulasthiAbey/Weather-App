import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { apiCallReducer, settingUpDateReducer } from "./reducers";

const rootReducer = combineReducers({ apiCallReducer, settingUpDateReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
