import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navebar from './componant/Header/Navebar'

function App() {
  const {user, isLoaded,isSignedIn}= useUser()

  if(!isSignedIn && isLoaded){
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <>
    <Navebar />
      <Outlet />      
    </>
  )
}

export default App
