import React, { useState } from 'react';
import AboutEventModal from '../../modals/AboutEventModal/AboutEventModal';
import MoreEvent from '../MoreEvent/MoreEvent';
import FormatedDate from './FormatedDate/FormatedDate';
import './RightSideBar.scss'

const RightSideBar = ({events}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [openedEvent, setOpenedEvent] = useState(0);

    function openModal(curId) {
			console.log('curId', curId)
      setModalOpen(!modalOpen)
      setOpenedEvent(curId)
    }

	return (
		<div className="rightSideBar">
      {/* <Modal modalOpen={modalOpen}>
         <MoreEvent id={openedEvent}/>
      </Modal> */}
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
