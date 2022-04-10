import axios from 'axios'
import { setEventsToState } from '../actions/eventActions';


export const getAllEvents = () => async (dispatch) => {
  const res = await axios.get('http://sportik.herokuapp.com/events');
  console.log(res);
  dispatch(setEventsToState(res.data));
}

export const addNewEvent = (event) => async (dispatch) => {
  console.log( await axios.post('http://sportik.herokuapp.com/events/addevent', event))
  dispatch(getAllEvents());
}


