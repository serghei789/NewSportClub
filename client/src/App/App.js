import './App.scss'
import Main from "../components/common/Main/Main";
import Header from "../components/UI/Header/Header";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {checkAuth} from "../redux/actions/userActions";
import {Routes, Route} from "react-router-dom";
import RegistrationModal from "../components/modals/RegistrationModal/RegistrationModal";
import LoginModal from "../components/modals/LoginModal/LoginModal";
import PrivateRouter from "../components/common/PrivateRouter/PrivateRouter";
import SignOut from "../components/common/SignOut/SignOut";
import AddEventModal from "../components/modals/AddEventModal/AddEventModal";

function App() {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkAuth)
	}, [])

	return (
		<div className="wrapper">
			<Header/>
			<Routes>
				<Route path="/newevent" element={<PrivateRouter><AddEventModal /></PrivateRouter>} />
				{/*<Route path="/event/edit" element={<PrivateRouter>< /></PrivateRouter>} />*/}
				<Route path="/auth/signout" element={<PrivateRouter><SignOut /></PrivateRouter>} />
				<Route path="/auth/signin" element={<LoginModal />} />
				<Route path='/auth/signup' element={<RegistrationModal />} />
			</Routes>
			<Main/>
		</div>
	);
}

export default App;
