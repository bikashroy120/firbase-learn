import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Forget = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [compassword,setComPassword] = useState("");
    const [forget,setForget]= useState(false)


  return (
    <div className=' h-screen w-full bg-slate-300 pt-[135px]'>
        <div className="container w-full h-full">
            <div className='w-full h-full flex items-center justify-center'>
                    {
                        forget ? (
                            <div className='w-[450px] h-auto bg-white shadow-lg rounded-lg p-5'>
                            <h2 className='text-center text-[25px] font-bold py-5'>Comfrim Password</h2>
                            <div className='flex items-center flex-col w-full gap-4'>
                                <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                                <input type="password" placeholder='Comfrom password' value={compassword} onChange={(e)=>setComPassword(e.target.value)} className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                                <button className='w-full py-2 border border-gray-400 bg-blue-500 text-white rounded-lg'>Reset Password</button>
                            </div>
                        </div>

                        ):(
                            <div className='w-[450px] h-auto bg-white shadow-lg rounded-lg p-5'>
                            <h2 className='text-center text-[25px] font-bold py-5'>Send Email</h2>
                            <div className='flex items-center flex-col w-full gap-4'>
                                <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                                <button className='w-full py-2 border border-gray-400 bg-blue-500 text-white rounded-lg'>Send</button>
                            </div>
                          
        
                            <div className='flex items-center justify-center gap-2 py-4'>
                                <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                                <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                                    <span>OR</span>
                                <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                                <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                            </div>
              
                             <div className='flex items-center justify-between mt-3'>
                                <p><Link className='font-bold' to={"/login"}>-Login</Link></p>
                                <p><Link className='font-bold' to={"/signup"}>Signup-</Link></p>
                             </div>
                        </div>
                        )
                    }
            </div>
        </div>
    </div>
  )
}

export default Forget