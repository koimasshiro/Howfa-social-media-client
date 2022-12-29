import React, {useState, useRef} from 'react';
import './SharePosts.css';
import ProfilePic from '../../images/aleksandr-minakov-xDyqR14KyAs-unsplash.jpg';
import {GiCancel} from 'react-icons/gi';
import {FcGallery} from 'react-icons/fc';
import {AiFillVideoCamera, AiOutlineGif} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi'

const SharePosts = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const imageChange = (e)=>{
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }

  return (
    
    <div className='share-posts'>
      <img src={ProfilePic} alt='profile-img'/>
      <div className='share-input'>
        <input type='text' placeholder="What's on your mind?"/>
      <div className='share-options'>
        <div className='option' style={{color: 'orange'}} onClick={()=>imageRef.current.click()}>
          <FcGallery style={{fontSize: '17px'}}/>  Photo
        </div>
        <div className='option' style={{color: 'purple'}}>
          <AiFillVideoCamera style={{fontSize: '17px'}}/> Video
        </div>
        <div className='option' style={{color: 'blue'}}>
          <AiOutlineGif style={{fontSize: '17px'}}/>
          Gif
        </div>
        <div className='option' style={{color: 'green'}}>
          <HiLocationMarker style={{fontSize: '17px'}}/>
          Location
        </div>
        {/*Button */}
        <div style={{display: 'none'}}>
          <input type='file' name='myImage' ref={imageRef} onChange={imageChange}/>
        </div>
      </div>
      {image && 
      <div className='preview-img'>
        <GiCancel className='cancel' onClick={()=>setImage(null)}/>
        <img src={image.image} alt='file'className='post-img'/>
      </div>
      }
      </div>
     </div>

  )
}

export default SharePosts