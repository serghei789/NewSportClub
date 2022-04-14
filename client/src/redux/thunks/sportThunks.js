import axios from 'axios'
import {getSportToState} from "../actions/sportAction";



export const getAllSports = () => async (dispatch) => {
	const res = await axios.get('http://localhost:4042/sportplaces', { withCredentials: true }); //https://sportik.herokuapp.com/
	dispatch(getSportToState(res.data));
}
