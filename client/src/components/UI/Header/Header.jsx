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
        <img onClick={openModal} src="/assets/Group1plus.png" alt="" className="header__item header__item--plus"/>
        <Modal modalOpen={modalOpen}>
          <AddEventForm />
        </Modal>
      </div>
      <div className="header__right">
        <div className="header__items">
          <button className="header__item header__button">Signup</button>
          <button className="header__item header__button">Login</button>
          <img src="/assets/account.png" alt={''} className="header__item header__item--account" />
        </div>
      </div>
    </header>
  )
}

export default Header
