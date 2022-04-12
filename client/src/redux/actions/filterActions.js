import { SET_FILTER } from "../types/filterTypes";

export const setFilterToState = (filter) => ({
  type: SET_FILTER,
  payload: filter,
})
