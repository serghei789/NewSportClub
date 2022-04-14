import './App.scss'
import Main from "../components/common/Main/Main";
import Header from "../components/UI/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {checkAuth} from "../redux/actions/userActions";
import {Routes, Route} from "react-router-dom";
import RegistrationModal from "../components/modals/RegistrationModal/RegistrationModal";
import LoginModal from "../components/modals/LoginModal/LoginModal";
import PrivateRouter from "../components/common/PrivateRouter/PrivateRouter";
import SignOut from "../components/common/SignOut/SignOut";
import AddEventModal from "../components/modals/AddEventModal/AddEventModal";
import {SET_FILTER} from "../redux/types/filterTypes";

function App() {
	const [background, setBackground] = useState('');
	const theme = useSelector(store => store.filter)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkAuth())
	}, []);


	useEffect(() => {


		switch (theme) {
			case 'Все':
				setBackground('basketball')
				return
			// case 'Баскетбол':
			// 	setBackground('basketball')
			// 	return
			// case 'Волейбол':
			// 	setBackground('volleyball')
			// 	return
			//  default: return
		}
	}, [theme])


	return (
		<div className={`wrapper ${background}`}>
			<Header/>
			<Routes>
				<Route path="/" element={<Main bg={{background, setBackground}}/>} />
				<Route path="/newevent" element={<PrivateRouter><AddEventModal /></PrivateRouter>} />
				{/*<Route path="/event/edit" element={<PrivateRouter>< /></PrivateRouter>} />*/}
				<Route path="/auth/signout" element={<PrivateRouter><SignOut /></PrivateRouter>} />
				<Route path="/auth/signin" element={<LoginModal />} />
				<Route path='/auth/signup' element={<RegistrationModal />} />
			</Routes>
		</div>
	);
}

export default App;
