import React from 'react';
import './Main.scss'
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../LeftSideBar/RightSideBar/RightSideBar";
import {YandexMap} from "../../YMaps/YandexMap";

const Main = () => {
	return (
		<main className='main'>
			<LeftSideBar/>
			<YandexMap/>
			<div className="mainRight">
			<RightSideBar/>
			</div>
		</main>
	);
};

export default Main;