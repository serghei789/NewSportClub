import { SET_CUR_EVENT, SET_EVENTS } from "../types/eventTypes";

export const setEventsToState = (events) => ({
  type: SET_EVENTS,
  payload: events,
})

export const setCurrentEvent = (event) => ({
  type: SET_CUR_EVENT,
  payload: event,
})
