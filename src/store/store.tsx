import { createStore, compose } from "redux";
import { LoadingState, state } from "./state";
import { Item } from "./actionTypes";
import { combineReducers } from "redux";
import { tweetItemReducer } from "./reducer";

export interface RootState {
  items: state;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const RootReducer = combineReducers({
  items: tweetItemReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(RootReducer, composeEnhancers());
