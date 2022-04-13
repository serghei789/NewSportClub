import axios from 'axios'
import {getCategoryToState} from "../actions/categoryActions";


export const getAllCategories = () => async (dispatch) => {
	const res = await axios.get('http://localhost:4042/sports', { withCredentials: true }); //https://sportik.herokuapp.com/
	console.log('res -->', res)
	dispatch(getCategoryToState(res.data));
}
