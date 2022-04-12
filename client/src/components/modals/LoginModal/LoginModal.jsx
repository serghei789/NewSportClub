import { useState } from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signIn} from "../../../redux/actions/userActions";

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const [userSignIn, setUserSignIn] = useState({
      email: '',
      password: '',
    });

    const navigate = useNavigate();
    const from = { pathname: '/' };

    const changeHandler = (e) => {
      setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    };

    const dispatch = useDispatch();

    const submitHandler = (e) => {
      e.preventDefault();
      let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]));
      if (payload.length) {
        payload = Object.fromEntries(payload);
        dispatch(signIn(payload, navigate, from));
      }
    };

  
  return(
  <>
        <button onClick={handleShow} className="header__item header__button">Login</button>
        {/* <div onClick={handleShow}>
          <img src="/assets/Group1plus.png" alt="" className="header__item header__item--plus"/>
        </div> */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Войти</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={changeHandler} value={userSignIn.email} type="email" name="email" placeholder="Введите почту"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={changeHandler} value={userSignIn.password}  type="password" name="password" placeholder="Введите пароль"/>
              </Form.Group>
              <Button onClick={handleClose} variant="primary" type="submit">
                Войти
              </Button>
            </Form>


          </Modal.Body>
        </Modal>
  </>
  )
}
