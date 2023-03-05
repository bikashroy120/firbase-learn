import React, { useEffect, useState } from 'react'
import {doc, getDoc, updateDoc, } from "firebase/firestore"; 
import {db} from "../firebase-config"

const Update = ({id,setShow}) => {

    const [name,setName] = useState("")
    const [age,setAge] = useState()
    const [users,setUsers] = useState();


  
      useEffect(() => {
        const getData = async()=>{
          const docRef = doc(db, "users", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().name);
            setName(docSnap.data().name)
            setAge(docSnap.data().age)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }


         }
          getData()
      }, [id])



    const updateUser = async()=>{
      const docRef = doc(db, "users", id);
       await updateDoc(docRef, {name,age});
       setShow(false)
    }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-slate-400 flex items-center justify-center '>
        <div className='w-[400px] h-[400px] bg-white flex items-center justify-center'>
        <div className='flex flex-col items-center gap-2'>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} className='py-1 px-2 rounded-md border border-gray-500' />
            <input type="text" placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)} className='py-1 px-2 rounded-md border border-gray-500' />
            <button onClick={()=>updateUser()} className='py-1 px-2 rounded-md border border-gray-500'>save</button>
            <button className='py-1 px-2 rounded-md bg-red-600 text-white border border-gray-500' onClick={()=>setShow(false)}>close</button>
        </div>
        
        </div>

        
    </div>
  )
}

export default Update