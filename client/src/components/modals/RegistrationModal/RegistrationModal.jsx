import { useState } from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signUp} from "../../../redux/actions/userActions";


export default function RegistrationModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userSignUp, setUserSignUp] = useState({
    email: '',
    name: '',
    password: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserSignUp((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignUp).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signUp(payload, navigate));
    }
  }


  return (
    <>
      <button onClick={handleShow} className="header__item header__button">Signup</button>
      {/* <div onClick={handleShow}>
        <img src="/assets/Group1plus.png" alt="" className="header__item header__item--plus"/>
      </div> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Регистрация</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={changeHandler} value={userSignUp.email} type="email" name="email" placeholder="Введите почту"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={changeHandler} value={userSignUp.name} type="text" name="name" placeholder="Введите имя"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={changeHandler} value={userSignUp.password}  type="password" name="password" placeholder="Password"/>
            </Form.Group>
            <Button onClick={handleClose} variant="primary" type="submit">
              Зарегистрироваться
            </Button>
          </Form>


        </Modal.Body>

      </Modal>
    </>
  )

}
