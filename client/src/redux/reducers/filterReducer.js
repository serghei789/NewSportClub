import {initState} from "../init/initState";
import { SET_FILTER } from "../types/filterTypes";

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload
		default: return state
	}
}
