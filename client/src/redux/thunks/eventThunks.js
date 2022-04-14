import axios from 'axios'
import { setCurrentEvent, setEventsToState } from '../actions/eventActions';


export const getAllEvents = () => async (dispatch) => {
  const res = await axios.get('http://localhost:4042/events');
  dispatch(setEventsToState(res.data));
}

export const addNewEvent = (event) => async (dispatch) => {
  await axios.post('http://localhost:4042/events/newevent', event);
  dispatch(getAllEvents());
}

export const getAboutEvent = (id) => async (dispatch) => {
  const event = await axios.get(`http://localhost:4042/events/about/${id}`);
  console.log('getAboutEvent');
  dispatch(setCurrentEvent(event.data));
}



