import React from 'react';
import {PostData} from '../../Data/PostData';
import './Post.css';
import {BiComment, BiDotsVerticalRounded} from 'react-icons/bi';
import {AiFillHeart} from 'react-icons/ai';
import {BsHeart} from 'react-icons/bs';
import {FaShare} from 'react-icons/fa';


const Post = () => {
  return (
    <div className='posts'>
        {PostData.map((post, id)=>{
            return(
            <div className='post'>
              <div className='post-head'>
                <div>
                  <img src={post.userImg} className='profile-pic' alt='profile-pic'/>
                  <span style={{paddingLeft: '10px', fontWeight: '500'}}>{post.name}</span>
                </div>
                <div>
                  <span><BiDotsVerticalRounded style={{fontSize: '20px'}}/></span>
                </div>
              </div>
                <img src={post.img} alt='post-img' className='post-img'/>
                <div className='post-react'>
                    {post.liked ? 
                    <AiFillHeart style={{color: 'purple', fontSize: '24px', cursor: 'pointer'}}/>
                     : 
                    <BsHeart style={{fontSize: '22px', cursor: 'pointer'}}/>
                    }
                    <BiComment style={{fontSize: '22px', cursor: 'pointer'}}/>
                    <FaShare style={{fontSize: '22px', cursor: 'pointer'}} />
                </div>
                <span>{post.liked? `You and ${post.likes} others` : `${post.likes} likes`}</span>
                <div className='detail'>
                  <span><b>{post.name}</b></span>
                  <span> {post.desc}</span>
                 <p style={{fontSize: '13px', color: 'gray'}}>{post.datePosted}</p>
                </div>
            </div>
            )
        })}
    </div>
  )
  }

export default Post