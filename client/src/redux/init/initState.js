export const initState = () => ({
	user: null,
	loader: false,
	areas: [],
	events: [],
  filter: 'Все',
})

const getInitState = () => {
	const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
	console.log(stateFromLS)
	return stateFromLS || initState();

};

export default getInitState;
