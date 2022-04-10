import axios from 'axios'
import { setEventsToState } from '../actions/eventActions';

export const addNewEvent = (event) => async (dispatch) => {
  await axios.post('/events', event);
  const res = await axios.get('/events');
  dispatch(setEventsToState(res.data));
}
