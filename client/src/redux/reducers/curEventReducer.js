import {initState} from "../init/initState";
import { SET_CUR_EVENT } from "../types/eventTypes";

export const curEventReducer = (state = initState, action) => {
	switch (action.type) {
    case SET_CUR_EVENT:
      return action.payload
		default: return state
	}
}
