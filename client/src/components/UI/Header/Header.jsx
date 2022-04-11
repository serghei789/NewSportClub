import './Header.scss'
import { useState } from 'react'
import AddEventForm from '../../common/AddEventForm/AddEventForm'
import { Button, Modal } from 'react-bootstrap'
import AddEventModal from '../../modals/AddEventModal/AddEventModal'
import LoginModal from '../../modals/LoginModal/LoginModal'
import RegistrationModal from '../../modals/RegistrationModal/RegistrationModal'

const Header = () => {
  
  

  return (
    <header className='header container'>
        {/* <Modal modalOpen={modalOpen}>
          <AddEventForm />
        </Modal> */}
      <div className="header__left">
        <AddEventModal />
      </div>
      
      <div className="header__right">
        <div className="header__items">
          <RegistrationModal />
          <LoginModal />
          <button className="header__item header__button">Logout</button>
          <img src="/assets/account.png" alt={''} className="header__item header__item--account" />
        </div>
      </div>
    </header>
  )
}

export default Header
