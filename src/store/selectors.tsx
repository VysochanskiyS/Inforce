import { RootState } from "./store";

export const getItems = (state: RootState) => {
  return state.items;
};
