import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import MoreEvent from '../../MoreEvent/MoreEvent';
import './RightSideBar.scss'

const RightSideBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(!modalOpen)
  }
	return (
		<div className="rightSideBar">
			<div onClick={openModal} className="rightSideBar__item">
      <Modal modalOpen={modalOpen}>
        <MoreEvent/>
      </Modal>
				<div className="rightSideBar__top">
					<p><strong>Волейбол</strong></p>
					<p>17 00 19 00</p>
				</div>
				<div className="rightSideBar__bottom">
					hichu poigrat Lorem ipsum dolor sit amet.
				</div>
			</div>
			<div className="rightSideBar__item">
				<div className="rightSideBar__top">
					<p>Craisjdoaisjdoia</p>
					<p>17 00 19 00</p>
				</div>
				<div className="rightSideBar__bottom">
					hichu poigrat Lorem ipsum dolor sit amet.
				</div>
			</div>
		</div>
	);
};

export default RightSideBar;
