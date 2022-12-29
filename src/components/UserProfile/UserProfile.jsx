import React from 'react';
import ProfileCard from '../profilecard/ProfileCard';
import SuggestionsCard from '../suggestionscard/SuggestionsCard';
import './UserProfile.css'

const UserProfile = () => {
  return (
    <div className= 'userprofile'>
      <ProfileCard/>
      <SuggestionsCard/>
    </div>
  )
}

export default UserProfile