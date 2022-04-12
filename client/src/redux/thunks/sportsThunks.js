import axios from 'axios'
import { setAreasToState } from '../actions/areaActions';



export const getSports = () => async (dispatch) => {
  const res = await axios.get('http://localhost:4042/sports', { withCredentials: true }); //https://sportik.herokuapp.com/
  dispatch(setAreasToState(res.data));
}
