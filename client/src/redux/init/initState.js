export const initState = () => ({
	user: null,
	loader: false,
	areas: [],
	events: [],
    filter: 'Все'
})

const getInitState = () => {
	const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
	return stateFromLS || initState;

};

export default getInitState;
