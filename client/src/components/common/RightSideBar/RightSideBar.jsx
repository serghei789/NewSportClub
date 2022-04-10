import React from 'react';
import { useSelector } from 'react-redux';
import './RightSideBar.scss'

const RightSideBar = () => {
  const events = useSelector(state => state.events)
	return (
		<div className="rightSideBar">
      {events && events.map((event) => 
      <div className="rightSideBar__item">
				<div className="rightSideBar__top">
					<p>{event.startTime.slice(0, 10)}</p>
					<p>{event.startTime.slice(-10,-3)} - {event.endTime.slice(-10,-3)}</p>
				</div>
				<div className="rightSideBar__bottom">
					<p>{event.title}</p>
					<p>{event.about}</p>
				</div>
			</div>
      )}
		</div>
	);
};

export default RightSideBar;
