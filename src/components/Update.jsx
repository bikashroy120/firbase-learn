import React, { useEffect, useState } from 'react'
import { collection, getDocs,addDoc,doc, query, where, orderBy } from "firebase/firestore"; 
import {db} from "../firebase-config"

const Update = ({id}) => {

    const [name,setName] = useState("")
    const [age,setAge] = useState()
    const [users,setUsers] = useState();


  
      useEffect(() => {
        const getData = async()=>{
          
         }
          getData()
      }, [id])



    const updateUser = ()=>{

    }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-slate-400 flex items-center justify-center '>
        <div className='w-[400px] h-[400px] bg-white flex items-center justify-center'>
        <div className='flex flex-col items-center gap-2'>
            <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} className='py-1 px-2 rounded-md border border-gray-500' />
            <input type="number" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} className='py-1 px-2 rounded-md border border-gray-500' />
            <button onClick={()=>updateUser()} className='py-1 px-2 rounded-md border border-gray-500'>save</button>
        </div>
        </div>
    </div>
  )
}

export default Update