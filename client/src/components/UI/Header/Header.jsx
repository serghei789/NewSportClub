import './Header.scss'
import {useEffect, useState} from 'react'
import AddEventForm from '../../common/AddEventForm/AddEventForm'
import { Button, Modal } from 'react-bootstrap'
import AddEventModal from '../../modals/AddEventModal/AddEventModal'
import LoginModal from '../../modals/LoginModal/LoginModal'
import RegistrationModal from '../../modals/RegistrationModal/RegistrationModal'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signOut} from "../../../redux/actions/userActions";
import ProfilePage from '../../common/ProfilePage/ProfilePage'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user)

  const handleLogout = () => {
      dispatch(signOut());
      navigate('/');
  }

  return (
    <header className='header container'>
        {/* <Modal modalOpen={modalOpen}>
          <AddEventForm />
        </Modal> */}
      <div className="header__left">
        {
        user 
        && <AddEventModal />
        }
      </div>
      
      <div className="header__right">
        <div className="header__items">
          {user 
          ?  
          <>
          <button className="header__item header__button" onClick={handleLogout}>Logout</button>
          <ProfilePage />
          </>
          : 
          <>
          <RegistrationModal />
          <LoginModal />
          </>
          }
        </div>
      </div>
    </header>
  )
}

export default Header
