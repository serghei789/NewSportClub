import {initState} from "../init/initState";
import {GET_SPORT} from "../types/sportTypes";

export const sportReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_SPORT:
			return action.payload
		default: return state
	}
}
