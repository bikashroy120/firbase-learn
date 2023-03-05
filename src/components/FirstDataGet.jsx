import React, { useEffect, useState } from 'react'
import { collection, getDocs,addDoc, doc, deleteDoc } from "firebase/firestore"; 
import {db} from "../firebase-config"
import Update from './Update';

const FirstDataGet = () => {

    const [users,setUsers] = useState();
    const [name,setName] = useState("")
    const [age,setAge] = useState()
    const [gander,setGender] = useState("male")
    const [show,setShow] = useState(false)
    const [dataId,setDataId] = useState(null)
    const conntion = collection(db,"users")

 

    const getData = async()=>{
      const data = await getDocs(conntion) 
      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
   }

    useEffect(() => {
        getData()
    }, [getData])

    
    const creactUser = async()=>{
      if(name===" " && age===" "){
        alert("give all data")
      }else{
        const responce = await addDoc(conntion,{name,age})
        console.log(responce.docs)
      }
    }

    const addataId = (id)=>{
      setDataId(id)
      setShow(true)
    }

    const deleteData = async(id)=>{
        const docsItem = doc(db,"users",id)
        alert("are you delete data")
        const data = await deleteDoc(docsItem)
        console.log(data)
    }


  return (
    <div className='max-w-[700px] m-auto pt-4'>
        <div className='flex flex-col items-center gap-2'>
            <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} className='py-1 px-2 rounded-md border border-gray-500' />
            <input type="number" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} className='py-1 px-2 rounded-md border border-gray-500' />
            <select onChange={(e)=>setGender(e.target.value)} className='py-1 px-2 rounded-md border border-gray-500'>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button onClick={()=>creactUser()} className='py-1 px-2 rounded-md border border-gray-500'>save</button>
        </div>
            <div className='flex items-center flex-col gap-5 justify-center'>
        {
          users?.map((item,i)=>{
            return(
              <div key={i}>
                <h2>{item.name}</h2>
                <p>{item.age}</p>
                <div>
                  <button onClick={()=> addataId(item.id)} className='py-1 px-2 rounded-md bg-green-500 text-white'>update</button>
                  <button onClick={()=>deleteData(item.id)} className='py-1 px-2 rounded-md bg-red-500 text-white'>delete</button>
                </div>

                {
                  show && <Update id={dataId} setShow={setShow}/>
                }
              </div>
            )
          })
        }
    </div>
    </div>
  )
}

export default FirstDataGet