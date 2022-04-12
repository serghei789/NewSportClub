import axios from 'axios'
import { setEventsToState } from '../actions/eventActions';


export const getAllEvents = () => async (dispatch) => {
  const res = await axios.get('http://localhost:4042/events');
  dispatch(setEventsToState(res.data));
}

export const addNewEvent = (event) => async (dispatch) => {
  await axios.post('http://localhost:4042/newevent', event);
  dispatch(getAllEvents());
}


