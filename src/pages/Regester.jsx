import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const Regster = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [compassword,setComPassword] = useState("");
    const [lodding,setLodding] = useState(false)
    const navigate =  useNavigate()

    const submitRegester = ()=>{
      setLodding(true)
      if(password!==compassword){
        toast.error("Password didnt macth")
        setLodding(false)
      }else{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          setLodding(false)
          toast.success("Regester successful...")
          navigate("/login")
        })
        .catch((error) => {
          setLodding(false)
          toast.error(error.message)
        });
      }
    }


  return (
    <>
        {
          lodding && <Loader/>
        }

        <div className=' h-screen w-full bg-slate-300 pt-[135px]'>
          <div className="container w-full h-full">
              <div className='w-full h-full flex items-center justify-center'>
                  <div className='w-[450px] h-auto bg-white shadow-lg rounded-lg p-5'>
                      <h2 className='text-center text-[25px] font-bold py-5'>Sign Up</h2>
                      <div className='flex items-center flex-col w-full gap-4'>
                          <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                          <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                          <input type="password" placeholder='Comfrom password' value={compassword} onChange={(e)=>setComPassword(e.target.value)} className='w-full py-2 border border-gray-400 rounded-lg px-2' />
                          <button onClick={submitRegester} className='w-full py-2 border border-gray-400 bg-blue-500 text-white rounded-lg'>Log in</button>
                      </div>
                    

                      <div className='flex items-center justify-center gap-2 py-4'>
                          <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                          <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                              <span>OR</span>
                          <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                          <div className=' bg-gray-500 h-[2px] w-[15px]'></div>
                      </div>
        
                      <div className='text-center mt-3'>
                          <p>You have a account?<Link className='font-bold' to={"/login"}>Login</Link></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </>
  )
}

export default Regster