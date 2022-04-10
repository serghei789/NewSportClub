import { SET_EVENTS } from "../types/eventTypes";

export const setEventsToState = (events) => ({
  type: SET_EVENTS,
  payload: events,
})
