import React, {useState} from 'react';
import './ProfileMain.css';
import ProfilePic from '../../images/aleksandr-minakov-xDyqR14KyAs-unsplash.jpg';
import {BiPencil} from 'react-icons/bi';
import ProfileModal from '../profilemodal/ProfileModal';


const ProfileMain = () => {
    const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='profile-main'>
        <div className='profile-img'>
            <span style={{padding: '20px 0px 10px 20px'}}>Emily Rothman</span>
            <img src={ProfilePic} alt='profile-pic' />
        </div>
        <div>
            <div className='row'>
                <span>@emilyrothman</span>
            </div>
            <div className='follow-info'>
                <p><b>1,689</b><span style={{color: 'rgba(36,45,73, 0.65)', fontSize: '18px'}}> Followers</span></p>
                <p><b>235</b><span style={{color: 'rgba(36,45,73, 0.65)', fontSize: '18px'}}> Following</span></p>
                <p><b>0</b><span style={{color: 'rgba(36,45,73, 0.65)', fontSize: '18px'}}> Posts</span></p>
            </div>
            <span style={{fontSize:'20px'}}>Fashion Designer</span>
            <div className='profile-info'>
                <div>
                    <span className='span'>Lives in Manhattan</span>
                    <span style={{fontSize: '30px'}}><b> .</b></span>
                </div>
                <div>
                    <span className='span'>Single</span>
                    <span style={{fontSize: '30px'}}><b> . </b></span>
                    <span className='span'> CEO of ViViCollections</span>
                </div>
            </div>
            <button className='btn' onClick={()=>setModalOpened(true)}>Edit Profile <BiPencil style={{paddingLeft: '8px'}}/></button>
            <ProfileModal 
             modalOpened={modalOpened}
             setModalOpened={setModalOpened}
            />
        </div>
    </div>
  )
}

export default ProfileMain