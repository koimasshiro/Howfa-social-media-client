import React from 'react';
import './SideBar.css';
import {BsPeopleFill} from 'react-icons/bs';
import {AiFillPlaySquare, AiFillSetting} from 'react-icons/ai';
import {FaBookmark, FaHashtag, FaFlag} from 'react-icons/fa'
import ProfilePic from '../../images/aleksandr-minakov-xDyqR14KyAs-unsplash.jpg';

const SideBar = () => {
  return (
    <>
    <div className='sidebar'>
        <nav>
            <ul className='nav-list'>
                <li><FaHashtag style={{color: 'purple'}}/> Trends</li>
                <li><BsPeopleFill style={{color: 'purple'}}/> Groups</li>
                <li><AiFillPlaySquare style={{color: 'purple'}}/> Watch Reels</li>
                <li><FaBookmark style={{color: 'purple'}}/> Saved</li>
                <li><FaFlag style={{color: 'purple'}}/> Pages</li>
                <li><AiFillSetting style={{color: 'purple'}}/> Settings</li>
            </ul>
        </nav>
    </div>
    <div className='logout'>
      {/*add dark mode button */}
        <img src={ProfilePic} alt='profile-pic'/>
         <span><b>Emily Rothman</b></span>
        <span>logout</span>
    </div>
    </>
  )
}

export default SideBar