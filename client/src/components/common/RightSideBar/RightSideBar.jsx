import React, { useState } from 'react';
import MoreEvent from '../MoreEvent/MoreEvent';
import './RightSideBar.scss'

const RightSideBar = ({events}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [openedEvent, setOpenedEvent] = useState(0);

    function openModal(curId) {
			console.log('curId', curId)
      setModalOpen(!modalOpen)
      setOpenedEvent(curId)
    }
console.log('openedEvent', openedEvent)
	console.log('events', events)
	return (
		<div className="rightSideBar">
      {/* <Modal modalOpen={modalOpen}>
         <MoreEvent id={openedEvent}/>
      </Modal> */}
      {events && events.map((event) => 
      <div id={event.id} onClick={(e) => openModal(e.currentTarget.id)} className="rightSideBar__item" key={event.id}>
				<div className="rightSideBar__top">
					<p className='rightSideBar__top--date'>{event.startTime.slice(0, 10)}</p>
					<p className='rightSideBar__top--time'>{event.startTime.slice(-10,-3)} - {event.endTime.slice(-10,-3)}</p>
				</div>
				<div className="rightSideBar__bottom">
					<p className='rightSideBar__bottom--title'>{event.title}</p>
					<p className='rightSideBar__bottom--about'>{event.about}</p>
				</div>
			</div>
      )}
		</div>
	);
};

export default RightSideBar;



// import React, { useState } from 'react';
// import Modal from '../../Modal/Modal';
// import MoreEvent from '../../MoreEvent/MoreEvent';
// import './RightSideBar.scss'

// const RightSideBar = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   function openModal() {
//     setModalOpen(!modalOpen)
//   }
// 	return (
// 		<div className="rightSideBar">
// 			<div onClick={openModal} className="rightSideBar__item">
//       <Modal modalOpen={modalOpen}>
//         <MoreEvent/>
//       </Modal>
// 				<div className="rightSideBar__top">
// 					<p><strong>Волейбол</strong></p>
// 					<p>17 00 19 00</p>
// 				</div>
// 				<div className="rightSideBar__bottom">
// 					hichu poigrat Lorem ipsum dolor sit amet.
// 				</div>
// 			</div>
// 			<div className="rightSideBar__item">
// 				<div className="rightSideBar__top">
// 					<p>Craisjdoaisjdoia</p>
// 					<p>17 00 19 00</p>
// 				</div>
// 				<div className="rightSideBar__bottom">
// 					hichu poigrat Lorem ipsum dolor sit amet.
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default RightSideBar;
