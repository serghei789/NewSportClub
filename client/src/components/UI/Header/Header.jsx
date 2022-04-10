import Modal from '../../common/Modal/Modal'
import './Header.scss'
import { useState } from 'react'
import AddEventForm from '../../common/AddEventForm/AddEventForm'

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(!modalOpen)
  }

  return (
    <header className='header container'>
      <div className="header__left">
        <img onClick={openModal} src="/assets/Group1plus.png" alt="" className="header__item header__item--img"/>
        <Modal modalOpen={modalOpen}>
          <AddEventForm />
        </Modal>
      </div>
      <div className="header__right">
        <div className="header__items">
          <button className="header__item header__button">login</button>
          <button className="header__item header__button">login</button>
          <img src="/assets/account.png" alt={''} className="header__item header__item--img" />
        </div>
      </div>
    </header>
  )
}

export default Header
