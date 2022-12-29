import React from 'react';
import Post from '../post/Post';
import SharePosts from '../shareposts/SharePosts';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='homepage'>
        <SharePosts/>
        <Post/>
    </div>
  )
}

export default HomePage