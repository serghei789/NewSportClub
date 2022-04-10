import { SET_AREAS } from "../types/areaTypes";

export const setAreasToState = (areas) => ({
  type: SET_AREAS,
  payload: areas,
})
