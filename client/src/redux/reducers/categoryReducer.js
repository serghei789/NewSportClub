import {initState} from "../init/initState";
import {GET_CATEGORY} from "../types/categoryTypes";

export const categoryReducer = (state = initState, action) => {
	switch (action.type) {
		case GET_CATEGORY:
			return action.payload
		default: return state
	}
}
