import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddEventForm from "../../common/AddEventForm/AddEventForm";

export default function AddEventModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
  <>
        <div onClick={handleShow}>
          <img src="/assets/Group1plus.png" alt="" className="header__item header__item--plus"/>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddEventForm />
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
