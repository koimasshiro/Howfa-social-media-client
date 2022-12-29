import React from 'react';
import {FaSearch, FaBell} from 'react-icons/fa';
import {AiFillHome, AiFillMessage} from 'react-icons/ai';
import {FaUserFriends} from 'react-icons/fa';
import SideBar from '../sidebar/SideBar';
import './LeftSide.css';


function LeftSide() {
  return (
    <div className='Leftside'>
        <div className='search-logo'>
            <img src='' alt='Howfa Logo'/>
            <div className='search'>
                <input className='search-input'type='text' placeholder='Explore Howfa'/>
                <div className='search-icon'>
                    <FaSearch/>
                </div>
            </div>
        </div>
      <div className='nav-icons'>
        <AiFillHome style={{ color: 'purple', width: '1.5rem', height: '1.5rem'}}/>
        <FaBell style={{ color: 'purple', width: '1.5rem', height: '1.5rem'}}/>
        <FaUserFriends style={{ color: 'purple', width: '1.5rem', height: '1.5rem'}}/>
        <AiFillMessage style={{ color: 'purple', width: '1.5rem', height: '1.5rem'}}/>
      </div>
      <SideBar/>
    </div>
  )
}

export default LeftSide