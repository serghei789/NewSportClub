import React from 'react';
import { useSelector } from 'react-redux';
import './RightSideBar.scss'

const RightSideBar = ({events}) => {
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
