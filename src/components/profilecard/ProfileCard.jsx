import React from 'react';
import './ProfileCard.css';
import ProfilePic from '../../images/aleksandr-minakov-xDyqR14KyAs-unsplash.jpg';
{/*import CoverImg from '../../images/online-cryptocurrency-exchange-platform-service-concept_73903-242.png'*/}

const ProfileCard = () => {
  return (
    <div className='profilecard'>
        <div className='profile-images'>
            <img src={ProfilePic} alt='profile-img'/>
            {/*<img src={CoverImg} alt='cover-img'/>*/}
        </div>
        <div className='profile-details'>
          <span className='profile-name'>Emily Rothman</span>
          <span>Fashion Designer</span>
        </div>
        <div className='follow-details'>
          <hr/>
          <div>
          <div className='follows'>
            <span style={{fontWeight: 'bold'}}>1,689</span>
            <span style={{color: 'rgba(36,45,73, 0.65)', fontSize: '16px'}}>followers</span>
          </div>
          <div className='vl'></div>
          <div className='follows'>
            <span style={{fontWeight: 'bold'}}>235</span>
            <span style={{color: 'rgba(36,45,73, 0.65)', fontSize: '16px'}}>following</span>
          </div>
          </div>
          <hr/>
        </div>
        <span className='profile-link'>View Profile</span>
    </div>
  )
}

export default ProfileCard