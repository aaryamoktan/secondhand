import React, { useState } from 'react'
import axios from "axios"
const Shome = () => {
    const [userId ,setId] = useState()
    const [password,setPassword] = useState()
    const login = (e)=>
    {
        e.preventDefault()
        axios.post("api",{userId,password})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
  return (
    <div className='w-[100%] h-[100vh] bg-[#495364] flex justify-center items-center'>
        <div className='w-[30%] h-[60vh] bg-[#fafafa] shadow-amber-500 rounded-xl text-center   '>
            <form className=' text-center text-white'>
               <h1 className='mt-10 font-serif font-semibold text-3xl text-[#495364]'>Login</h1>
               <input onChange={(e)=>
                {
                    setId(e.target.value)
                }
               } placeholder='User Id' className='w-[90%] h-[5vh]  font-serif rounded-2xl mt-20 bg-[#495364] text-center text-xl'/><br/>
               <input onChange={(e)=>
                {
                    setPassword(e.target.value)
                }
               } placeholder='Password' className='w-[90%] h-[5vh] text-[white] font-serif rounded-2xl mt-5 bg-[#495364] text-center text-xl'/>
               <br/>
               <button onClick={login} className='text-[white] w-[30%] h-[5vh] bg-[#495364] mt-10 rounded-lg font-serif'>Login</button>
            </form>
            <p className='text-[#495364] font-serif mt-8'>if you don't have account </p>
            <button className='text-[white] w-[30%] h-[5vh] bg-[#495364]  rounded-lg font-serif mt-2'><a href="/registration">Registration</a></button>
        </div>
    </div>
  )
}

export default Shome