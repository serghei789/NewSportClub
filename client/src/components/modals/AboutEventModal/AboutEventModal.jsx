import { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAboutEvent } from "../../../redux/thunks/eventThunks";
import AddEventForm from "../../common/AddEventForm/AddEventForm";
import ChatRoom from "../../common/Chatroom/ChatRoom";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function AboutEventModal({event, children}) {
  const curEvent = useSelector(state => state.curEvent)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const isAuth = useSelector(state => state.user)

  const handleClose = () => setShow(false);
  const handleShow = () => {
    dispatch(getAboutEvent(event.id))
    setShow(true);
  }
  
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
              <p>Создатель: {curEvent && curEvent.creator?.name}</p>
              <p>Начало: {event.startTime}</p>
              <p>Окончание: {event.endTime}</p>
              <p>Участники: </p>
              <AvatarGroup max={4}>
                {curEvent && curEvent.followers?.map(fol => <Avatar src={(fol?.photoSrc?.length < 40) ? `http://localhost:4042/img/${fol.photoSrc}` : `${fol.photoSrc}`}/>)}
              </AvatarGroup>
              </Card.Text>
              {isAuth ? <ChatRoom event={event}  /> : console.log('not_auth')}
            </Card.Body>
          </Card>
        </Modal>
  </>
  )
}
