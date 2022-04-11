import React from 'react';
import './LeftSideBar.scss'

const LeftSideBar = () => {
	return (
		<div className="leftSideBar">
			<div className="leftSideBar__item">
				Все
			</div>
			<div className="leftSideBar__item">
				Футболл
			</div>
			<div className="leftSideBar__item">
				Воллейболл
			</div>
			<div className="leftSideBar__item">
				Баскетболл
			</div>
			<div className="leftSideBar__item">
				Пинг-понг
			</div>
			<div className="leftSideBar__item">
				Теннис
			</div>
			<div className="leftSideBar__item">
				Турники
			</div>
		</div>
	);
};

export default LeftSideBar;
