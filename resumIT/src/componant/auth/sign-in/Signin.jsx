import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function Signin() {
  return (
    <div className='flex justify-center my-20 items-center'>
      <SignIn />
    </div>
  )
}

export default Signin
