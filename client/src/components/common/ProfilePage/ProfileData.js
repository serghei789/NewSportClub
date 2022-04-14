import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getUserData } from '../../../redux/actions/userActions'
import style from './profile.module.css';


const ProfileData = () => {
const navigate = useNavigate();
  // const id = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const [inputs, setInputs] = useState({});
  const [count, setCount] = useState(false);
  useEffect(()=>{
    fetch(`http://localhost:4042/user/${userData.id}`).then(res => res.json()).then(data => setInputs(data))
  }, [count])


  const handleChange = (e) => {
    if (e.target.files) {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        file: e.target.files[0],
      }));
    } else {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', inputs.file);
    formData.append('name', inputs.name);
    formData.append('email', inputs.email);
    formData.append('about', inputs.about);
    dispatch(editUser({formData, userData, navigate, setCount, count}));
    setCount(!count)
  };

  return (
    <form className={style.formochka}>
      <div className="container col-md-5 mb-4 my-4 w-50">
        <div className="">
          <div className="d-flex flex-column align-items-center text-center my-3">
            <img src={inputs.photo ? `http://localhost:4042/img/${inputs.photo}` : 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'} alt="profilephoto" className="rounded" width="350" />
            <div className="my-3">
              <h4>
                {' '}
                <span className="container col-md-4 mb-3">
                  Ваш кабинет, 
                </span>
                {inputs.name}
              </h4>
              <input
                className="inputphoto input-file"
                id="file"
                onChange={handleChange}
                type="file"
                name="file"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5>Ваши данные</h5>
            <hr />
            <div className="row">
            <p><strong>Имя</strong></p>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="name" placeholder="Имя" value={inputs.name} onChange={handleChange} />
              </div>
            </div>
            <hr />
            <div className="row">
                  <p><strong>Email</strong></p>
              <div className="col-sm-9 text-secondary">
                <input className="text" type="text" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} />
              </div>
            </div>
            <hr />
            <div className="row">
                <p><strong>О себе</strong></p>
                <div className="col-sm-9 text-secondary">
                  <input className="text" type="text" name="about" placeholder="о себе..." value={inputs.about} onChange={handleChange} />
                </div>
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary my-3">Сохранить изменения</button>
        {/* <Link to="/addBidding"><button className="btn btn-secondary my-3 mx-3">Подать объявление</button></Link>
        <Link to="/myProducts"><button className="btn btn-secondary my-3 mx-1">Мои товары</button></Link> */}
      </div>
    </form>
  );
};

export default ProfileData;
