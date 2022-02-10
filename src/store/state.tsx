import { Item } from "./actionTypes";
export enum LoadingState {
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER = "NEVER",
  LOADING = "LOADING",
}

export interface state {
  items: Item[];
  loadingState: LoadingState;
  busket: any;
}
