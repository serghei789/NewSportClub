import './Header.scss'
import { useState } from 'react'
import AddEventForm from '../../common/AddEventForm/AddEventForm'
import { Button, Modal } from 'react-bootstrap'

const Header = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className='header container'>
        {/* <Modal modalOpen={modalOpen}>
          <AddEventForm />
        </Modal> */}
      <div className="header__left">
        <Button variant="primary" onClick={handleShow}>
          <img src="/assets/Group1plus.png" alt="" className="header__item header__item--plus"/>
        </Button>
      </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
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
