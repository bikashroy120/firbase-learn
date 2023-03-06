import React from 'react'
import {FiSearch} from "react-icons/fi"
import {MdFavoriteBorder} from "react-icons/md"
import {BsCart3} from "react-icons/bs"
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className=' fixed w-full  bg-slate-800 text-white'>
        <div className="container">
            <div className='flex items-center justify-between pt-3'>
                    <p className="text-white">
                        Free Shipping Over $100 & Free Returns
                    </p>
                    <p className="text-white">
                        Hotline:
                        <a className="text-white" href="tel:+91 8264954234">
                        +91 8264954234
                        </a>
                    </p>
            </div>
            <div className='py-5 flex items-center justify-between gap-5'>
                <div className='flex-1'>
                    <h2 className='text-[25px] font-bold'>TechDSF</h2>
                </div>
                <div className='flex-[5]'>
                    <div className='w-[100%] bg-transparent border flex items-center justify-between border-white'>
                        <input type="text" placeholder='Search...' className=' text-[20px] font-semibold bg-transparent outline-none w-[100%] border-none px-2' />
                        <button className=' bg-orange-400 py-3 px-3 text-[25px]'><FiSearch/></button>
                    </div>
                </div>
                <div className='flex-[1] flex items-center justify-between gap-3'>

                    <div className='flex items-center gap-5 text-[18px]'>
                    <Link to={"/"}>
                        <div className=' text-white relative'>
                            <BsCart3 className=' text-white text-[30px]'/>
                            <span className=' bg-orange-500 absolute top-[-10px] flex items-center justify-center right-[-10px] text-white w-[20px] h-[20px] rounded-full'>12</span>
                        </div>
                    </Link>
                    <Link to={"/"}>
                        <div className=' text-white relative'>
                            <MdFavoriteBorder className=' text-white text-[30px]'/>
                            <span className=' bg-orange-500 absolute top-[-10px] flex items-center justify-center right-[-10px] text-white w-[20px] h-[20px] rounded-full'>12</span>
                        </div>
                    </Link>
                    <Link to={"/"}>Blog</Link>
                    <Link to={"/login"}>Login</Link>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navber