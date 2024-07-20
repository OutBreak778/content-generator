import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const UserComponent = () => {
  return (
    <div className='bg-white'>
        <div className="ml-36 py-6">
        <UserProfile />
        </div>
    </div>
  )
}

export default UserComponent