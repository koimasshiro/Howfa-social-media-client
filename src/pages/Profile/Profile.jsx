import React from 'react';
import LeftSide from '../../components/leftSide/LeftSide';
import ProfileActivity from '../../components/profileActivity/ProfileActivity';
import ProfileMain from '../../components/profilemain/ProfileMain';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile'>
        <LeftSide/>
        <div className='profile-center'>
          <ProfileMain/>
          <ProfileActivity/>
        </div>
    </div>
  )
}

export default Profile