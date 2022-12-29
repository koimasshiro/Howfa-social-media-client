import React from 'react';
import Post from '../post/Post';
import './ProfileActivity.css'
import {PostData} from '../../Data/PostData';
import {FaShare } from 'react-icons/fa';
import {BiComment, BiDotsVerticalRounded} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai'

const ProfileActivity = () => {
  
const data = PostData.filter(post => post.liked === true);

  return (
    <div className='profile-activity'>
      
  {data.map((item) =>{
    return(
        <div className='post-section'>
              <div className='post-head'>
                <div>
                  <img src={item.userImg} className='profile-pic' alt='profile-pic'/>
                  <span style={{paddingLeft: '10px', fontWeight: '500'}}>{item.name}</span>
                </div>
                <div>
                  <span><BiDotsVerticalRounded style={{fontSize: '20px'}}/></span>
                </div>
              </div>
                <img src={item.img} alt='post-img' className='post-img'/>
                <div className='post-react'>
                    <AiFillHeart style={{color: 'purple', fontSize: '24px', cursor: 'pointer'}}/>
                    <BiComment style={{fontSize: '22px', cursor: 'pointer'}}/>
                    <FaShare style={{fontSize: '22px', cursor: 'pointer'}} />
                </div>
                <span>{item.liked? `You and ${item.likes} others` : `${item.likes} likes`}</span>
                <div className='detail'>
                  <span><b>{item.name}</b></span>
                  <span> {item.desc}</span>
                 <p style={{fontSize: '13px', color: 'gray'}}>{item.datePosted}</p>
                </div>
            </div>
    )
  })}
  </div>
  )}
 

export default ProfileActivity