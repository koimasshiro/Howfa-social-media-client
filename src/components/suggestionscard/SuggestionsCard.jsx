import React from 'react';
import './SuggestionsCard.css';
import {Users} from '../../Data/FollowersData'

const SuggestionsCard = () => {

  return (
    <div className='suggestions-card'>
        <h3>Suggestions For You</h3>
        {Users.map((user, id)=>{
            return(
                <div className='user'>
                    <div className='user-details'>
                        <img src={user.image} alt='user-img' className='user-img'/>
                        <div className='user-name'>
                            <span>{user.name}</span>
                            <span>@{user.username}</span>
                        </div>
                    </div>
                    <button className='btn'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default SuggestionsCard