import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import AddEventForm from "../../common/AddEventForm/AddEventForm";
import ChatRoom from "../../common/Chatroom/ChatRoom";

export default function AboutEventModal({event, children}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
  <>
        <div onClick={handleShow} style={{width: '100%'}}>
          {children}
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>{event.title}</Modal.Title>
          </Modal.Header>
          <Card style={{ width: '100%' }} closeButton>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{event.startTime.slice(0, 10)}</Card.Subtitle>
              <Card.Text>
              <p>Создатель: {event.userId}</p>
              <p>Начало: {event.startTime}</p>
              <p>Окончание: {event.endTime}</p>
              <p>Участники: </p>
              </Card.Text>
              <ChatRoom event={event}  />
            </Card.Body>
          </Card>
        </Modal>
  </>
  )
}
