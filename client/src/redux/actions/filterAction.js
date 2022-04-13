import { FILTER_CAT} from "../../../filterTypes";

export const getFilterCatToState = (category) => ({
	type: FILTER_CAT,
	payload: category,
})
