import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1 className='welcome-header'>Welcome!</h1>
      <div className='welcome-detail'>
      <span className='sub-header'>HowFa</span>
      <span>Share Your Memories, <span style={{color: 'purple'}}>Share Your Ideas!</span></span>
      </div>
        <button className='btn gs-btn'>Get Started</button>
        <span className='login-link'>Log In</span>
  </div>

  )
}

export default Welcome