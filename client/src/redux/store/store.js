import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers/rootReducer";
import {initState} from "../init/initState";
import getInitState from "../init/initState";

export const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
	window.localStorage.setItem('redux', JSON.stringify(store.getState()));
});

export default store;
