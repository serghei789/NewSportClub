import axios from 'axios'
import { setEventsToState } from '../actions/eventActions';


export const getAllEvents = () => async (dispatch) => {
  const res = await axios.get('http://sportik.herokuapp.com/events');
  dispatch(setEventsToState(res.data));
}

export const addNewEvent = (event) => async (dispatch) => {
  dispatch(getAllEvents());
}


