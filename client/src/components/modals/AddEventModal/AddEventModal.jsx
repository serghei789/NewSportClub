import moment from "moment";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewEvent } from "../../../redux/thunks/eventThunks";
import AddEventForm from "../../common/AddEventForm/AddEventForm";

export default function AddEventModal() {
  const [titleInput, setTitleInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [areaIdInput, setAreaIdInput] = useState('');
  const [sportIdInput, setSportIdInput] = useState('');
  const [startTimeInput, setStartTimeInput] = useState(new Date().toISOString());
  const [endTimeInput, setEndTimeInput] = useState(new Date().toISOString());

  const dispatch = useDispatch()

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addNewEvent({
      title: titleInput,
      about: commentInput,
      placeId: areaIdInput,
      sportId: sportIdInput,
      userId: 1,  //TODO 
      startTime: moment(startTimeInput).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(endTimeInput).format('YYYY-MM-DD HH:mm:ss'),
    }))
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
  <>
        <div onClick={(e) => handleShow(e)}>
          <img src="/assets/Group1plus.png" alt="" className="header__item header__item--plus"/>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Новое событие</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <AddEventForm /> */}
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Название</Form.Label>
                <Form.Control 
                onChange={(e) => setTitleInput(e.target.value)} 
                value={titleInput} 
                type="text" 
                placeholder="Название" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Начало</Form.Label>
                <Form.Control 
                onChange={(e) => setStartTimeInput(e.target.value)}
                value={startTimeInput}
                type="text" 
                placeholder="Введите дату начала" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Конец</Form.Label>
                <Form.Control 
                onChange={(e) => setEndTimeInput(e.target.value)}
                value={endTimeInput}
                type="text" 
                placeholder="Введите дату начала" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>СпортId</Form.Label>
                <Form.Control 
                onChange={(e) => setSportIdInput(e.target.value)} 
                value={sportIdInput} 
                type="text" 
                placeholder="selector" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ПлощадкаId</Form.Label>
                <Form.Control 
                onChange={(e) => setAreaIdInput(e.target.value)} 
                value={areaIdInput} 
                type="text" 
                placeholder="seletor" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Коментарий</Form.Label>
                <Form.Control 
                onChange={(e) => setCommentInput(e.target.value)} 
                value={commentInput} 
                type="text" 
                placeholder="..." />
              </Form.Group>
              <Button variant="primary" type="submit">
                Создать
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
  </>
  )
}
