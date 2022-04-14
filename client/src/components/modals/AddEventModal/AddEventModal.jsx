import moment from "moment";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewEvent, getAllEvents } from "../../../redux/thunks/eventThunks";
import AddEventForm from "../../common/AddEventForm/AddEventForm";
import getSports from '../../config/endPoints'

export default function AddEventModal() {
  const [titleInput, setTitleInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [areaIdInput, setAreaIdInput] = useState('');
  const [sportIdInput, setSportIdInput] = useState('');
  const [startTimeInput, setStartTimeInput] = useState(new Date().toISOString());
  const [endTimeInput, setEndTimeInput] = useState(new Date().toISOString());
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addNewEvent({
      title: titleInput,
      about: commentInput,
      placeId: areaIdInput,
      sportId: sportIdInput,
      userId: user.id,  //TODO 
      startTime: moment(startTimeInput).format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment(endTimeInput).format('YYYY-MM-DD HH:mm:ss'),
    }))
    dispatch(getAllEvents())
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [sports, setSports] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4042/sports').then(res => res.json()).then(data => setSports(data))
  },[])
  // console.log('---------------------------------',sportIdInput);
  
  const [places, setPlaces] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4042/places').then(res => res.json()).then(data => setPlaces(data))
  },[])
  // console.log('---------------------------------',places);

  return(
  <>
        <div onClick={(e) => handleShow(e)} /* className='btn btn-light' */>
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
                <Form.Select aria-label="Default select example" onChange={(e) => setSportIdInput(e.target.value)}>
                  <option>Виды спорта</option>
                  {sports.map(el => {
                   return <option key={el.id} value={`${el.id}`}>{el.title}</option>
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select aria-label="Default select example" onChange={(e) => setAreaIdInput(e.target.value)}>
                  <option>Площадки</option>
                  {places.map(el => {
                   return <option key={el.id} value={`${el.id}`}>{el.title}</option>
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Коментарий</Form.Label>
                <Form.Control 
                onChange={(e) => setCommentInput(e.target.value)} 
                value={commentInput} 
                type="text" 
                placeholder="..." />
              </Form.Group>
              <Button onClick={handleClose} variant="primary" type="submit">
                Создать
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
  </>
  )
}
