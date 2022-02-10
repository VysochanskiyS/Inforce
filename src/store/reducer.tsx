import produce, { Draft } from "immer";
import { LoadingState, state } from "./state";
import { ItemsActionType } from "./actionCreators";
export const initialTweetsState: any | {} = {
  items: {},
  loadingState: LoadingState.NEVER,
  busket: [],
};

export const tweetItemReducer = produce((draft: Draft<state>, action: any) => {
  switch (action.type) {
    case ItemsActionType.setItems:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;
    case ItemsActionType.SET_LOADING_STATE:
      draft.loadingState = LoadingState.LOADING;
      break;
    case ItemsActionType.addToBusket:
      draft.busket.push(action.payload);
      break;
    default:
  }
}, initialTweetsState);
