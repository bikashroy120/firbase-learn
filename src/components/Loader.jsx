import React from 'react'
import loader from "../asstes/image/Hourglass.gif"

const Loader = () => {
  return (
    <div className='w-[100%] h-[100%] fixed top-0 left-0 bg-white opacity-90 flex items-center justify-center'>
        <img src={loader} alt="loading..." />
    </div>
  )
}

export default Loader