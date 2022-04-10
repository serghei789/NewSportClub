import React from 'react';
import './Main.scss'
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../LeftSideBar/RightSideBar/RightSideBar";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllEvents } from '../../../redux/thunks/eventThunks';
import { getAllAreas } from '../../../redux/thunks/areaThunks';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAreas())
    dispatch(getAllEvents())
  }, [])

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
