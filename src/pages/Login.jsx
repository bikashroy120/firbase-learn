import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from "react-icons/fc"

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


  return (
    <div className=' h-screen w-full bg-slate-300 pt-[135px]'>
        <div className="container w-full h-full">
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-[450px] h-auto bg-white shadow-lg rounded-lg p-5'>
                    <h2 className='text-center text-[25px] font-bold py-5'>Log In</h2>
                    <div className='flex items-center flex-col w-full gap-4'>
                        <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                        <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                        <button className='w-full py-2 border border-gray-400 bg-blue-500 text-white rounded-lg'>Log in</button>
                    </div>
                    <Link className=' border-b border-gray-600' to={"/forget"}>Forget pasword?</Link>

                    <div className='flex items-center justify-center gap-2 py-4'>
                        <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                        <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                            <span>OR</span>
                        <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                        <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                    </div>
                     <button className='w-full flex items-center justify-center gap-2 py-2 border border-gray-400 bg-orange-600 text-white rounded-lg'><FcGoogle/> Login With Google</button>
                     <div className='text-center mt-3'>
                        <p>Dont have a account?<Link className='font-bold' to={"/signup"}>Signup</Link></p>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login