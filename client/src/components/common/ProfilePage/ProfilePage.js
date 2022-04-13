import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileData from './ProfileData';
import ProfileList from './ProfileList';
import {Button, Form, Modal} from "react-bootstrap";
import { signUp } from '../../config/endPoints';
import style from './profile.module.css'


function ProfilePage() {
  const dataUser = useSelector((state) => state.user);
  const id = useParams();
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

  // if (+id.id === dataUser.id) 
  if(dataUser){
    return (
      <>
      <button onClick={handleShow} className="header__item header__button">
      <img src="/assets/account.png" alt={''} className="header__item header__item--account"  />
      </button>
      {/* <div onClick={handleShow}>
        <img src="/assets/Group1plus.png" alt="" className="header__item header__item--plus"/>
      </div> */}
      <Modal size='lg' show={show} onHide={handleClose} >

        <Modal.Header closeButton>
          <Modal.Title>личный кабинет</Modal.Title>
        </Modal.Header>
        <Modal.Body >

          <Form  onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <ProfileData />
              </Form.Label>
              <Form.Label >
                <ProfileList />
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>

      </Modal>
    </>
      //  <div className="row content my-3">
      //           <center>
      //             <h4>
      //               Привет,
      //               {' '}
      //               {dataUser.name}
      //               ! Создай событие!
      //             </h4>
      //           </center>
      //           <div className="col s5 pull-s7">
      //             <ProfileData />
      //             {' '}
      //             <ProfileList />
      //             {' '}
      //             {' '}
      //             <span className="flow-text" />
      //           </div>
      //       </div>
    );
  }
  return (
    <p> пользователь не найден! </p>
  );
}

export default ProfilePage;
