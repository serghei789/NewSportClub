import React, {useMemo, useState} from 'react';
import './Main.scss'
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getAllEvents} from '../../../redux/thunks/eventThunks';
import {getAllAreas} from '../../../redux/thunks/areaThunks';
import {YandexMap} from "../../YMaps/YandexMap";

const Main = ({bg}) => {
	const dispatch = useDispatch();
	const [selectedPoint, setSelectedPoint] = useState(null)
	const events = useSelector(s => s.events)
	const filteredEvents = useMemo(() => selectedPoint
		? events.filter(el => el.placeId === selectedPoint.id)
		: events
	)

	useEffect(() => {
		dispatch(getAllAreas())
		dispatch(getAllEvents())
	}, [])

	return (
		<main className='main'>
			<LeftSideBar bg={bg}/>
			<YandexMap selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint}/>
			<div className="mainRight">
				<RightSideBar events={filteredEvents}/>
			</div>
		</main>
	);
};

export default Main;
