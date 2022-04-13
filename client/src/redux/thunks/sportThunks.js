import axios from 'axios'
import {getSportToState} from "../actions/sportAction";



export const getAllSports = () => async (dispatch) => {
	const res = await axios.get('http://localhost:4042/sportplaces', { withCredentials: true }); //https://sportik.herokuapp.com/
	console.log('res -->', res)
	dispatch(getSportToState(res.data));
}
