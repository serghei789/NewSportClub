import {initState} from "../init/initState";
import { SET_AREAS } from "../types/areaTypes";

export const areasReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AREAS:
      return action.payload
		default: return state
	}
}
