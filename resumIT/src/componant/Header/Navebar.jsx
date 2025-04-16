import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'


function Navebar() {

    const{user,isSignedIn}=useUser();


  return (
    <div className='w-full h-[50px] shadow-md text-white bg-green-800 flex justify-between items-center px-4'>
      <div className="logo">
        <h1 className='text-2xl font-bold' >ResumeIT</h1>
      </div>
      

      {isSignedIn ? 
      <ul className='gap-4 lg:gap-10 flex '>
      <li><a href="/deshboard">Deshboard</a></li>
      <li><a href="/create">Create</a></li>
      <UserButton />
    </ul>:
      <Link to={'/auth/sign-in'}><button className='py-2 px-4 border 
      rounded-xl border-white cursor-pointer hover:bg-white hover:text-green-800 font-bold'>
        Get Start</button></Link>
      
    }
      
      
    </div>
  )
}

export default Navebar
