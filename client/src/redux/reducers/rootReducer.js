import {combineReducers} from "redux";
import {areasReducer} from "./areasReducer";
import {eventsReducer} from "./eventsReducer";
import userReducer from "./userReducer";
import loaderReducer from "./loaderReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
	user: userReducer,
	areas: areasReducer,
	events: eventsReducer,
	loader: loaderReducer,
  filter: filterReducer
})
