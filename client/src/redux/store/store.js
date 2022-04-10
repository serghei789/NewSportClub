import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers/rootReducer";
import {initState} from "../init/initState";

export const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))