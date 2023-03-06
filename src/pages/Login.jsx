import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' h-screen w-full bg-slate-300 pt-[135px]'>
        <div className="container w-full h-full">
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-[500px] h-[500px] bg-white shadow-lg rounded-lg p-5'>
                    <h2 className='text-center text-[25px] font-bold py-5'>Log In</h2>
                    <div className='flex items-center flex-col w-full gap-4'>
                        <input type="text" placeholder='Enter Email' className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                        <input type="text" placeholder='Enter Email' className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                        <button className='w-full py-2 border border-gray-400 rounded-lg'>Log in</button>
                    </div>
                    <Link to={"/"}></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login