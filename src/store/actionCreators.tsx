import { Action } from "redux";
import { Item } from "./actionTypes";
export enum ItemsActionType {
  setItems = "items/SET_ITEMS",
  addToBusket = "items/ADD_TO_BUSKET",

  SET_LOADING_STATE = "items/SET_LOADING_STATE",
}

export interface SetItemsInterface {
  type: ItemsActionType.setItems;
  payload: Item[];
}
export const setItems = (payload: Item[]): SetItemsInterface => ({
  type: ItemsActionType.setItems,
  payload,
});
export interface setLoadingState {
  type: ItemsActionType.SET_LOADING_STATE;
  payload: string;
}
export interface AddToBusketInterface {
  type: ItemsActionType.addToBusket;
  payload: Item;
}

export const setLoadingState = (payload: string): setLoadingState => ({
  type: ItemsActionType.SET_LOADING_STATE,
  payload,
});
export const addItemToBusket = (payload: Item): AddToBusketInterface => ({
  type: ItemsActionType.addToBusket,
  payload,
});

export type ItemsActions = setLoadingState | SetItemsInterface;
