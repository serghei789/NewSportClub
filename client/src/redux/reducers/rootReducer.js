import {combineReducers} from "redux";
import {areasReducer} from "./areasReducer";
import {eventsReducer} from "./eventsReducer";
import userReducer from "./userReducer";
import loaderReducer from "./loaderReducer";
import { filterReducer } from "./filterReducer";
import { curEventReducer } from "./curEventReducer";

export const rootReducer = combineReducers({
	user: userReducer,
	areas: areasReducer,
	events: eventsReducer,
	loader: loaderReducer,
  curEvent: curEventReducer,
  filter: filterReducer
})
