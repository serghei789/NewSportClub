import React, {useMemo, useState} from 'react';
import './Main.scss'
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../LeftSideBar/RightSideBar/RightSideBar";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getAllEvents } from '../../../redux/thunks/eventThunks';
import { getAllAreas } from '../../../redux/thunks/areaThunks';
import {YandexMap} from "../../YMaps/YandexMap";

const Main = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllAreas())
    dispatch(getAllEvents())
  }, [])

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
