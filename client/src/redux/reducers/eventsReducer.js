import {initState} from "../init/initState";
import { SET_CUR_EVENT, SET_EVENTS } from "../types/eventTypes";

export const eventsReducer = (state = initState, action) => {
	switch (action.type) {
    case SET_EVENTS:
      return action.payload
		default: return state
	}
}
