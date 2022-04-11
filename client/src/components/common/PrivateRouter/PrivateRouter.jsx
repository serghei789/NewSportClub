import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';

function PrivateRouter({children}) {
	const auth = useSelector((state) => state.user);

	return (
		auth ? children : console.log('go away man')
	)
}

export default PrivateRouter