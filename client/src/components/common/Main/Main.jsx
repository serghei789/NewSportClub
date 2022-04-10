import React from 'react';
import './Main.scss'
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../LeftSideBar/RightSideBar/RightSideBar";

const Main = () => {
	return (
		<main className='main'>
			<LeftSideBar/>
			<img src="/assets/map.png" style={{width: '600px'}} alt=""/>
			<div className="mainRight">
			<RightSideBar/>
			</div>
		</main>
	);
};

export default Main;