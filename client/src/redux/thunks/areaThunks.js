import axios from 'axios'
import { setAreasToState } from '../actions/areaActions';



export const getAllAreas = () => async (dispatch) => {
  const res = await axios.get('http://sportik.herokuapp.com/places', { withCredentials: true });
  console.log(res);
  dispatch(setAreasToState(res.data));
}
