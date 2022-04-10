import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {areasReducer} from "./areasReducer";
import {eventsReducer} from "./eventsReducer";

export const rootReducer = combineReducers({
	user: userReducer,
	areas: areasReducer,
	events: eventsReducer
})