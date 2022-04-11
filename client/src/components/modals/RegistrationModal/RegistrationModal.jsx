import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function RegistrationModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
  <>
        <button onClick={handleShow} className="header__item header__button">Signup</button>
        {/* <div onClick={handleShow}>
          <img src="/assets/Group1plus.png" alt="" className="header__item header__item--plus"/>
        </div> */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Регистрация
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
  </>
  )
}
