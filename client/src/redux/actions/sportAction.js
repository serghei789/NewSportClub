import { GET_SPORT} from "../types/sportTypes";

export const getSportToState = (sport) => ({
	type: GET_SPORT,
	payload: sport,
})
