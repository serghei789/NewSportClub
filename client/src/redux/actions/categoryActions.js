import { GET_CATEGORY} from "../types/categoryTypes";

export const getCategoryToState = (category) => ({
	type: GET_CATEGORY,
	payload: category,
})
