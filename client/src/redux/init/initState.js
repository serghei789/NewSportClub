export const initState = () => ({
	user: null,
	loader: false,
	areas: [],
	events: [],
  curEvent:{},
  filter: 'Все',
})

const getInitState = () => {
	const stateFromLS = JSON.parse(window.localStorage.getItem('redux'));
	return stateFromLS || initState();

};

export default getInitState;
