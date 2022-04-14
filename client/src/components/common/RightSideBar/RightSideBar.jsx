import React, {useEffect, useState} from 'react';
import AboutEventModal from '../../modals/AboutEventModal/AboutEventModal';
import FormatedDate from './FormatedDate/FormatedDate';
import './RightSideBar.scss'
import io from 'socket.io-client'
import { useDispatch } from 'react-redux';

const socket = io.connect('http://localhost:4042')

const RightSideBar = ({events}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [openedEvent, setOpenedEvent] = useState(0);
  const dispatch = useDispatch();

    function openModal(curId) {
      setModalOpen(!modalOpen)
      setOpenedEvent(curId)
    }

	return (
		<div className="rightSideBar">
      {events && events.map((event) => 
      <div id={event.id} onClick={(e) => openModal(e.currentTarget.id)} className="rightSideBar__item" key={event.id}>
        <AboutEventModal event={event}>
				<div className="rightSideBar__top">
          <FormatedDate time={event.startTime}/>
					<p className='rightSideBar__top--time'>{event.startTime.slice(-8,-3)} - {event.endTime.slice(-8,-3)}</p>
				</div>
				<div className="rightSideBar__bottom">
					<p className='rightSideBar__bottom--title'>{event.title}</p>
					<p className='rightSideBar__bottom--about'>{event.about}</p>
				</div>
      </AboutEventModal>
			</div>
      )}
		</div>
	);
};

export default RightSideBar;
