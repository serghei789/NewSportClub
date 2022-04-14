import React, { useEffect, useState } from 'react';
import './LeftSideBar.scss'
import {useDispatch} from "react-redux";
import { setFilterToState } from '../../../redux/actions/filterActions';
import { getSports } from '../../../redux/thunks/sportsThunks';
import axios from 'axios';

const LeftSideBar = ({bg}) => {
  const [sportList, setSportList] = useState([]);
  const [sportPlaces, setSportPlaces] = useState([]);
  const dispatch = useDispatch();

  function setFilter(sportId) {
      const bgArr = ['', 'football', 'basketball', 'volleyball', 'run', 'workout'];
      bg.setBackground(bgArr[sportId]);

    const placesWithSport = sportId ? sportPlaces.filter(el => el.sportId === sportId ).map(el => el.placeId) : 'Все'
    dispatch(setFilterToState(placesWithSport))
  }

  useEffect( async () => {
    const sports = await axios.get('http://localhost:4042/sports', { withCredentials: true });
    setSportList(sports.data);
    const sportplaces = await axios.get('http://localhost:4042/sportplaces', { withCredentials: true });
    setSportPlaces(sportplaces.data)
  }, [])

	return (
		<div className="leftSideBar">
      <p onClick={() => setFilter(0)} className='category'>Все</p>
			{sportList.map(category => <p onClick={() => setFilter(category.id)} key={category.id} className='category'>{category.title}</p>)}
		</div>
	);
};

export default LeftSideBar;
