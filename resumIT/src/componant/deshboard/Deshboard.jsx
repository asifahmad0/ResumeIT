import React from 'react';
import Create from '../create/Create';

function Deshboard() {

  return (
    <div className='border border-red-400 w-full flex justify-center items-center '>
      <div className="container gap-4 w-full border border-green-500 px-4 py-4  grid grid-cols-1 place-items-center md:grid-cols-4">
       {/* <div className="create w-[250px] h-[300px] border border-black grid place-items-center ">
          <a className='text-8xl ' href="/create">+</a>
        </div>*/}
        <Create />

        <div className="myresum w-[250px] h-[300px] bg-gray-100 border rounded-lg items-center flex items-center justify-center
      hover:scale-105 transition-all hover:shadow-mds"></div>
        <div className="myresum w-[250px] h-[300px] bg-gray-100 border rounded-lg items-center flex items-center justify-center
      hover:scale-105 transition-all hover:shadow-mds"></div>
        <div className="myresum w-[250px] h-[300px] bg-gray-100 border rounded-lg items-center flex items-center justify-center
      hover:scale-105 transition-all hover:shadow-mds"></div>
      </div>
    </div>
  )
}

export default Deshboard
