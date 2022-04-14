import { DELETE_USER, SET_USER } from '../types/userTypes';
import * as endPoints from '../../components/config/endPoints';
import { disableLoader, enableLoader } from './loaderAction';
import axios from 'axios';
import * as config from '../../components/config/endPoints'

export const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

export const getUserFromServer = (id) => async (dispatch) => {
	dispatch(enableLoader());
	const response = await fetch(endPoints.getUser(id), {
		credentials: 'include',
	});
	if (response.status === 200) {
		const currentUser = await response.json();
		dispatch(setUser(currentUser));
	}
	dispatch(disableLoader());
};

export const signUp = (payload, navigate) => async (dispatch) => {
	dispatch(enableLoader());
	const response = await fetch(endPoints.signUp(), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: JSON.stringify(payload),
	});
	if (response.status === 200) {
		const user = await response.json();
		dispatch(setUser(user));
		navigate('/');
	} else {
		navigate('/signup');
	}
	dispatch(disableLoader());
};

export const signIn = (payload, navigate, from) => async (dispatch) => {
	dispatch(enableLoader());
	const response = await fetch(endPoints.signIn(), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: JSON.stringify(payload),
	});
	if (response.status === 200) {
		const user = await response.json();
		dispatch(setUser(user));
		navigate(from);
	} else {
		navigate('/auth/signin');
	}
	dispatch(disableLoader());
};

export const deleteUser = () => ({
	type: DELETE_USER,
});

export const signOut = () => async (dispatch) => {
	const response = await fetch(endPoints.signOut(), {
		credentials: 'include',
	});
	if (response.status === 200) {

		dispatch(deleteUser());
	}
};

export const checkAuth = () => async (dispatch) => {
	const response = await fetch(endPoints.checkAuth(), {
		credentials: 'include',
	});
	if (response.status === 200) {
		const user = await response.json();
		dispatch(setUser(user));
	}
};

export const getUserData = (id) => async (dispatch) => {
  axios.get(`${config.getUser(id.id)}`)
    .then((response) => dispatch(setUser(response.data)));
};

export const editUser = ({formData, userData, navigate, setCount, count}) => async (dispatch) => {
	dispatch(enableLoader());
	const response = await fetch(endPoints.editUser(userData.id), {
		method: 'PUT',
		credentials: 'include',
		body: formData,
	});
	if (response.status === 200) {
		const user = await response.json();
		dispatch(setUser(user));
		setCount(!count)
	} else {
		navigate.replace('/');
	}
	dispatch(disableLoader());
};
