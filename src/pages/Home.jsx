import React from 'react';
import HomePage from '../components/Homepage/HomePage';
import LeftSide from '../components/leftSide/LeftSide';
import UserProfile from '../components/UserProfile/UserProfile';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <LeftSide/>
        <HomePage/>
        <UserProfile/>
    </div>
  )
}

export default Home