import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileData from './ProfileData';
import ProfileList from './ProfileList';

function ProfilePage() {
  const dataUser = useSelector((state) => state.user);
  const id = useParams();

  if (+id.id === dataUser.id) {
    return (
      <div className="row content my-3">
        <center>
          <h4>
            Привет,
            {' '}
            {dataUser.name}
            ! Давай расхламляться!
          </h4>
        </center>
        <div className="col s5 pull-s7">
          <ProfileData />
          {' '}
          <ProfileList />
          {' '}
          {' '}
          <span className="flow-text" />
        </div>
      </div>
    );
  }
  return (
    <p> пользователь не найден! </p>
  );
}

export default ProfilePage;