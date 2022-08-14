import React from 'react'
import Profile from '../components/Profile'

export default function profile() {
  return (
    <div>profile
        <Profile/>
    </div>

  )
}

/* 
If LOADING is true, then do NOT log the rating, as the user to Login...
if LOADING is false, then log the rating.
set user.userid object from Auth0 as a field in the database.

Do the save for favorite.

If loading is true, then save
*/