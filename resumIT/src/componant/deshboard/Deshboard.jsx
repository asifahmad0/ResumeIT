import React from 'react';
import Create from '../create/Create';

function Deshboard() {

  return (
    <div className='gap-6 w-full flex flex-col justify-center items-center '>
      <div className="p-6 flex flex-col justify-center items-center">
        <h1 className='text-3xl text-green-800 font-bold'>My Resume</h1>
        <p className=''>Start Creating Resume for Best Job Opportunity</p>
      </div>
      
      <div className="container ">
        <Create />        
      </div>

    </div>
  )
}

export default Deshboard
