import axios from 'axios'
import { setAreasToState } from '../actions/areaActions';
import { getAboutEvent } from './eventThunks';



export const addFollow = (eventId, userId) => async (dispatch) => {
  console.log('addFollow');
  const res = await axios.post('http://localhost:4042/index/newfollower', { eventId, userId }); //https://sportik.herokuapp.com/
  console.log(res);
  dispatch(getAboutEvent(eventId));
}
